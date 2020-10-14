import React from "react";
import './index.css';

function Input(props) {
    let classList = "";
    if (props.default_hover) {
        classList = `${props.default_hover}`
    } else if (props.error) {
        classList = `${props.error}`
    } else if (props.disabled) {
        classList = `${props.disabled}`
    } else if (props.helperText) {
        classList = `${props.helperText}`
    } else if (props.helperText && props.error) {
        classList = `${props.helperText} && ${props.error}`
    } else if (props.fillWidth) {
        classList = `${props.fillWidth}`
    } 
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <label>{props.label}</label>
            <input style={{width:'250px'}} type= "text" className={classList} placeholder="placeholder"/>
        </div>)
}

export default Input;