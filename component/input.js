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
    } else if (props.disabled) {
        classList = `${props.disabled}`
    } else if (props.helperText) {
        classList = `${props.helperText}`
    } else if (props.fillWidth) {
        classList = `${props.fillWidth}`
    }
    return (<input type="text" placeholder="Placeholder" className={classList}/>)
}

export default Input;