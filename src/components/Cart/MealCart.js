import classes from './MealCart.module.css';
import Modal from '../UI/Modal';
import ContextStore from '../../Store/Context';
import { useContext, useEffect, useState } from 'react';

const MealCart = (props) => {
  const context=useContext(ContextStore)
  const[order,setorder]=useState(false)
  // const[total,settotal]=useState(0)
  // const cartItems = (
  //   <ul className={classes['cart-items']}>
  //     {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  let total=0;
  context.items.forEach(item => {
    total=total+(item.price*item.Qty)
  });

  const enableorder=()=>{
    setorder(true)
  }

  if (order ===true) 
  {return <Modal DisebleCart={props.DisebleCart}>
    <div className={classes.total}>Order Succesfully</div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={()=>props.DisebleCart()}>Close</button>
    </div>
  </Modal> }
  
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
        <h7>
        {item.name}<br></br>
          Qty-{item.Qty}x<br/>
          Rs.{item.price}
        </h7>
      </span>
      <h4>Rs.{item.price*item.Qty}</h4>
      </div>
      )}
       <hr/>
      <div className={classes.total}>
       
        <span>Total Amount</span>
      <span>Rs.{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={()=>props.DisebleCart()}>Close</button>
        <button className={classes.button} onClick={enableorder} >Order</button>
      </div>
    </Modal>
  );
};

export default MealCart;