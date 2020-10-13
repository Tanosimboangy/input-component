import React from "react";
import './index.css';

function Input(props) {
    let classList = "";
    if (props.default) {
        classList = `${props.default}`
    }
    return (<input type="text" placeholder="Placeholder" className={classList}/>)
}

export default Input;

