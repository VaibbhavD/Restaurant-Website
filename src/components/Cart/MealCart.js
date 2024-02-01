import classes from "./MealCart.module.css";
import Modal from "../UI/Modal";
import ContextStore from "../../Store/Context";
import { useContext, useEffect, useState } from "react";
import NoItemCart from "./NoitemsCart";
import OrderCart from "./OrderCart";
import MealCartItem from "./MealCartitem";

const MealCart = (props) => {
  const context = useContext(ContextStore);
  const [order, setorder] = useState(false);
  const [total, settotal] = useState(0);

  // const cartItems = (
  //   <ul className={classes['cart-items']}>
  //     {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  useEffect(() => {
    const total = context.items.reduce(function (sum, item) {
      return (sum += item.price * item.Qty);
    }, 0);
    settotal(total);
  }, []);

  const AddTotal = (worth) => {
    settotal((prev) => prev + worth);
  };

  const enableorder = () => {
    setorder(true);
  };

  if (order === true) {
    return <OrderCart props={props} />;
  }

  if (context.items.length === 0) {
    return <NoItemCart props={props} />;
  }

  return (
    <Modal DisebleCart={props.DisebleCart}>
      {context.items.map((item) => (
        <MealCartItem item={item} total={total} AddTotal={AddTotal} />
      ))}
      <hr />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{total}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.DisebleCart()}
        >
          Close
        </button>
        <button className={classes.button} onClick={enableorder}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default MealCart;
