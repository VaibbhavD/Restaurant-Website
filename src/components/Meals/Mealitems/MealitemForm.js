import React,{useState} from "react";
import classes from '../Mealitems/Mealitems.module.css'

const MealitemForm=()=>{
    const[qty,setqty]=useState(0)

    const AddtoCart=(e)=>{
        e.preventDefault()
        setqty(prev=>prev+1)
    }

    return (
        <form onSubmit={AddtoCart} className={classes.form}>
        <div>
            <label>Quantity</label>
            <input 
            type='number'
            value={1}
            min={0}
            max={5}
            step={1}
            />
        </div>
        <div>
        <button>+ADD</button>
        </div>
    </form>
    )
}
export default MealitemForm