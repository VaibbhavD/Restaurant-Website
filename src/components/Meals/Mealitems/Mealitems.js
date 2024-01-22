import { useContext, useState } from 'react'
import classes from './Mealitems.module.css'
import MealitemForm from './MealitemForm'
// import ContextStore from '../../../Store/Context'

const Mealitems=(props)=>{
    const price=`RS.${props.price}`
    
    

    return(
        <li className={classes.meal}>
        <div>
            <h3>{props.name} </h3>
            <div className={classes.description}>{props.description} </div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealitemForm item={props}/>
        </div>
        </li>
    )
}
export default Mealitems