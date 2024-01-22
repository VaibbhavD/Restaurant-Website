import React, { useState } from "react";
import ContextStore from "./Context";

const ContextProvider = (props) => {
  const [items, setitems] = useState([]);

  const AddItem = (item) => {
    setitems((prev) => {
      return [...prev, item];
    });
  };

  const RemoveItem = (id) => {
    let item = items.filter((item) => item.id != id);
    setitems([...item]);
    console.log(items);
  };

  const Context = {
    items: items,
    Quantity: 0,
    AddItem: AddItem,
    RemoveItem: RemoveItem,
  };

  return (
    <ContextStore.Provider value={Context}>
      {props.children}
    </ContextStore.Provider>
  );
};
export default ContextProvider;
