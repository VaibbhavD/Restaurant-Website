import React,{useState} from "react";
import classes from '../Mealitems/Mealitems.module.css'

const MealitemForm=(props)=>{
   
    return (
        <form  className={classes.form}>
        <div>
            <label>Quantity</label>
            <input 
            type='number'
            value='0'
            min={0}
            max={5}
            step={1}
            />
        </div>
        <div>
        <button type='submit'>+ADD</button>
        </div>
    </form>
    )
}
export default MealitemForm