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
    } else if (props.helperTexts) {
        classList = `${props.helperTexts}`
    } else if (props.helperTexts && props.error) {
        classList = `${props.helperTexts} && ${props.error}`
    } else if (props.startIcon) {
        classList = `${props.startIcon}`
    } else if (props.fillWidth) {
        classList = `${props.fillWidth}`
    } 
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <input style={{width:'250px', order:'2'}} type= "text" className={classList} 
            placeholder="placeholder"/>
            <label style={{order:'1'}}>{props.label}</label>
            <span style={{order:'3'}}>{props.helperText && props.helperText}
      </span>
        </div>)
}

export default Input;