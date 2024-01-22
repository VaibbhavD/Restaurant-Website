import classes from './MealCart.module.css';
import Modal from '../UI/Modal';
import ContextStore from '../../Store/Context';
import { useContext, useEffect, useState } from 'react';

const MealCart = (props) => {
  const context=useContext(ContextStore)
  const[total,settotal]=useState(0)
  // const cartItems = (
  //   <ul className={classes['cart-items']}>
  //     {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );
  
  if(context.items.length=== 0)
  {
    return  <Modal DisebleCart={props.DisebleCart}>
      <div className={classes.total}>No Items</div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={()=>props.DisebleCart()}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal> 
    
  }
   else
  return (
    <Modal DisebleCart={props.DisebleCart}>
      {context.items.map((item)=>
      <div className={classes.total}>
      <span>
        <h5>
        {item.name}<br></br>
          {item.Qty}
        </h5>
      </span>
      <h4>{item.price}</h4>
      </div>
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
      <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={()=>props.DisebleCart()}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default MealCart;