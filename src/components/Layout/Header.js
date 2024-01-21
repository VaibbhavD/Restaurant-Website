import React, { Fragment, useContext } from 'react'
import mealsImage from '../../assts/meals.jpg'
import classes from './Header.module.css'
import CartButton from './CartButton'
import ContextStore from '../../Store/Context'


const Header=(props)=>{
    const context=useContext(ContextStore)
    
    return(
        <Fragment>
            <header  className={classes.header}>
            <h1>Burger King</h1>
            <CartButton enableCart={props.enableCart}/>
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Burger Kings burger'/>
            </div>
            
        </Fragment>
    )
}
export default Header