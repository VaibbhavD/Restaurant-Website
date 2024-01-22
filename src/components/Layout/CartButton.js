import React, { useState,useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './CartButton.module.css'
import ContextStore from '../../Store/Context'


const CartButton=(props)=>{
    const context=useContext(ContextStore)

    // const NoOfItems=context.items.reduce((currNumber,item)=>{
    //     return currNumber+item.Quantity;
    // },0)

    const NoOfItems=context.items.length;

    return(
        <button onClick={()=>props.enableCart()} className={classes.button}>
            <span className={classes.icon}>
            <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{NoOfItems}</span>
        </button>
    )
}
export default CartButton