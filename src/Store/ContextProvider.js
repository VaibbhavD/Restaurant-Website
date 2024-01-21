import React from "react";
import ContextStore from "./Context";


const ContxtProvider=(props)=>{

    const AddItem=()=>{}

    const RemoveItem=(id)=>{}

    const Context={
        items:[],
        Quantity,
        AddItem:AddItem,
        RemoveItem:RemoveItem

    }

    return (
        <ContextStore.Provider value={Context}>
            {props.children}
        </ContextStore.Provider>
    )
}
export default ContxtProvider