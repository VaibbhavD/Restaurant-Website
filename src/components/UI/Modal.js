import React from "react";
import  ReactDOM  from "react-dom";
import classes from './Modal.module.css'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.DisebleCart}/>
}

const ModalOverlay=(props)=>{

    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portal=document.getElementById('overlay')

const Modal=(props)=>{

    return(
        <>
        {ReactDOM.createPortal(<Backdrop DisebleCart={props.DisebleCart}/>,portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
        </>
    )

}
export default Modal