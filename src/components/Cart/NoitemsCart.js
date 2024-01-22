import React from "react";
import Modal from "../UI/Modal";
import classes from "./MealCart.module.css";

const NoItemCart = (props) => {
  return (
    <Modal DisebleCart={props.DisebleCart}>
      <div className={classes.total}>No Items</div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.props.DisebleCart()}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default NoItemCart;
