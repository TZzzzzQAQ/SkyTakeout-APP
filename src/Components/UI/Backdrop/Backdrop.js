import React from 'react';
import classes from './Backdrop.module.css'
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        ReactDOM.createPortal(
            <div
                onClick={props.toggle}
                className={`${classes.backdrop} ${props.className}`}
            >
                {props.children}
            </div>
            , document.getElementById('backdrop-root'))
    )
};

export default Backdrop;
