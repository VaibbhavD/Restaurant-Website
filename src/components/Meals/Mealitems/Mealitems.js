import classes from './Mealitems.module.css'

const Mealitems=(props)=>{
    const price=`RS.${props.price}`


    return(
        <li className={classes.meal}>
        <div>
            <h3>{props.name} </h3>
            <div className={classes.description}>{props.description} </div>
            <div className={classes.price}>{price}</div>
        </div>
        </li>
    )
}
export default Mealitems