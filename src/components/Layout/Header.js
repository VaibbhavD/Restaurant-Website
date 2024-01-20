import React, { Fragment } from 'react'
import mealsImage from '../../assts/meals.jpg'
import classes from './Header.module.css'
import CartButton from './CartButton'

const Header=porps=>{
    return(
        <Fragment>
            <header  className={classes.header}>
            <h1>Burger King</h1>
            <CartButton/>
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Burger Kings burger'/>
            </div>
            
        </Fragment>
    )
}
export default Header