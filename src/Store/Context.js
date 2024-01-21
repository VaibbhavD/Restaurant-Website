import React from "react";

const ContextStore=React.createContext({
    items:[],
    Quantity,
    AddItem:()=>{},
    RemoveItem:(id)=>{}
})

export default ContextStore