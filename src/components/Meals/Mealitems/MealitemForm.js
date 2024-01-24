import React, { useContext, useState } from "react";
import classes from "../Mealitems/Mealitems.module.css";
import ContextStore from "../../../Store/Context";

const MealitemForm = (props) => {
  const context = useContext(ContextStore);
  const [Qty, setQty] = useState(0);

  const Additem = (e) => {
    e.preventDefault();

    if (Qty === 0) {
      return alert("Please Add Quatity");
    }
    let add = false;

    for (let i = 0; i < context.items.length; i++) {
      if (context.items[i].id === props.item.id) {
        context.items[i].Qty = context.items[i].Qty + Number(Qty);
        add = true;
      }
    }
    if (add === false) {
      context.AddItem({ ...props.item, Qty: Number(Qty) });
    }
  };

  return (
    <form className={classes.form}>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          value={Qty}
          min={0}
          max={5}
          step={1}
          onChange={(e) => setQty(Number(e.target.value))}
        />
      </div>
      <div>
        <button type="submit" onClick={Additem}>
          +ADD
        </button>
      </div>
    </form>
  );
};
export default MealitemForm;
