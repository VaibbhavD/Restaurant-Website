import React from "react";
import ContextStore from "./Context";


const ContextProvider=(props)=>{

    const AddItem=({item})=>{
        props.items.add(item)
    }

    const RemoveItem=(id)=>{}

    const Context={
        items:[],
        Quantity:0,
        AddItem:AddItem,
        RemoveItem:RemoveItem
    }

    return (
        <ContextStore.Provider value={Context}>
            {props.children}
        </ContextStore.Provider>
    )
}
export default ContextProvider