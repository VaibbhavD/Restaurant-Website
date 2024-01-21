import React from "react";

const ContextStore=React.createContext({
    items:[],
    Quantity:0,
    AddItem:()=>{},
    RemoveItem:(id)=>{}
})

export default ContextStore