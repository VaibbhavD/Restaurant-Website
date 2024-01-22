import React, { useState } from "react";
import ContextStore from "./Context";


const ContextProvider=(props)=>{
    const[items,setitems]=useState([])

    const AddItem=(item)=>{
        // items.push(item)
        setitems((prev)=>{
            return [...prev,item]
        })
    }

    const RemoveItem=(id)=>{}

    const Context={
        items:items,
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