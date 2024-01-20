import React, { useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './CartButton.module.css'
import MealCart from '../Cart/MealCart'


const CartButton=props=>{
    const[show,setshow]=useState(false)

    const ShowCart=()=>{
        setshow(true)
    }
    if(show)
    {
        <MealCart />
    }

    return(
        <button onClick={ShowCart} className={classes.button}>
            <span className={classes.icon}>
            <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}
export default CartButton