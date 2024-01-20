import { useState } from 'react'
import classes from './Mealitems.module.css'

const Mealitems=(props)=>{
    const price=`RS.${props.price}`

    const[qty,setqty]=useState(0)

    const AddtoCart=(e)=>{
        e.preventDefault()
        setqty(prev=>prev+1)
    }



    return(
        <li className={classes.meal}>
        <div>
            <h3>{props.name} </h3>
            <div className={classes.description}>{props.description} </div>
            <div className={classes.price}>{price}</div>
        </div>

        <form onSubmit={AddtoCart} className={classes.form}>
            <div>
                <label>Quantity</label>
                <input 
                type='number'
                value={qty}
                disabled/>
            </div>
            <div>
            <button>+ADD</button>
            </div>
        </form>
        </li>
    )
}
export default Mealitems