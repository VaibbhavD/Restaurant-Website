import React, { useContext, useState } from "react";
import ContextStore from "../../Store/Context";
import classes from "./MealCart.module.css";

const MealCartItem = (props) => {
  const context = useContext(ContextStore);
  const [Quantity, setQuantity] = useState(props.item.Qty);
  const [price, setprice] = useState(props.item.price * props.item.Qty);

  const Decreaseitem = () => {
    setQuantity((prev) => prev - 1);
    setprice((prev) => prev - props.item.price);
    // props.total = props.total - props.item.price;
    if (Quantity < 2) {
      context.RemoveItem(props.item.id);
      props.AddTotal(-props.item.price);
    }
  };
  const Increaseitem = () => {
    setQuantity((prev) => prev + 1);
    setprice((prev) => prev + props.item.price);
    props.AddTotal(props.item.price);
  };

  return (
    <div className={classes.total}>
      <span>
        <h7>
          {props.item.name}
          <br></br>
          Qty-{Quantity}x<br />
          Rs.{props.item.price}
        </h7>
      </span>
      <div>
        <h4>Rs.{price}</h4>
        <button onClick={Decreaseitem}>-</button>
        <button onClick={Increaseitem}>+</button>
        <button
          className={classes.button}
          onClick={() => context.RemoveItem(props.item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default MealCartItem;
