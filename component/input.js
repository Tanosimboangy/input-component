import React from "react";
import './index.css';

function Input(props) {
    let classList = "";
    if (props.default_hover) {
        classList = `${props.default_hover}`
    } else if (props.default_focus) {
        classList = `${props.default_focus}`
    } else if (props.error) {
        classList = `${props.error}`
    }
    return (<input type="text" placeholder="Placeholder" className={classList}/>)
}

export default Input;