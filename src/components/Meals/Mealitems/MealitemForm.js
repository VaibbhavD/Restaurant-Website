import React,{useContext, useState} from "react";
import classes from '../Mealitems/Mealitems.module.css'
import ContextStore from "../../../Store/Context";

const MealitemForm=(props)=>{
    const context=useContext(ContextStore)
    const[Qty,setQty]=useState(0)
    
    const Additem=(e)=>{
        e.preventDefault();

        if(Qty===0)
        {
            return alert('Please Add Quatity')
        }

        context.AddItem({...props.item,Qty:Qty})
        // console.log(props.item)
        // console.log(context.items)
    }


    return (
        <form  className={classes.form}>
        <div>
            <label>Quantity</label>
            <input 
            type='number'
            value={Qty}
            min={0}
            max={5}
            step={1}
            onChange={(e)=>setQty(e.target.value)}
            />
        </div>
        <div>
        <button type='submit' onClick={Additem}>+ADD</button>
        </div>
    </form>
    )
}
export default MealitemForm