import React from "react";
import Modal from "../UI/Modal";
import classes from "./MealCart.module.css";

const OrderCart = (props) => {
  return (
    <Modal DisebleCart={props.DisebleCart}>
      <div className={classes.total}>Order Succesfully</div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.props.DisebleCart()}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
export default OrderCart;
