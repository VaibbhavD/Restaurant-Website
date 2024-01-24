import React, { Fragment, useContext } from "react";
import mealsImage from "../../assts/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
import ContextStore from "../../Store/Context";

const Header = (props) => {
  const context = useContext(ContextStore);

  return (
    <Fragment>
      <header className={classes.header}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
          className={classes.logo}
        />
        <h1>Burger King</h1>
        <CartButton enableCart={props.enableCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Burger Kings burger" />
      </div>
    </Fragment>
  );
};
export default Header;
