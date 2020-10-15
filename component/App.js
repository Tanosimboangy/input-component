import React from 'react'
import Input from "./input.js";


function App() {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{marginBottom:'3rem'}}>
                {` < input />`}
                <Input default_hover="default_hover" label="label" />
            </div>
            <div style={{marginBottom:'3rem'}}>
                {`<Input error />`}
                <Input error="error" label="label" />
            </div>
            <div style={{marginBottom:'3rem'}}>
                {`<Input disabled />`}
                <Input disabled="disabled" label="label" />
            </div>
            <div style={{marginBottom:'3rem'}}>
                {`<Input helperText="Some interesting text" />`}
                <Input 
                helperTexts="helperTexts" helperText="Some interesting text"
                label="label" 
                />
            </div>
            <div style={{marginBottom:'3rem'}}>
                {`<Input helperText="Some interesting text" error />`}
                <Input 
                helperTexts="helperTexts"  
                helperText="Some interesting text" error="error"
                label="label" 
                />
            </div>
            <div style={{marginBottom:'3rem'}}>
                {`<Input startIcon />`}
                <Input startIcon="startIcon" label="label" />
            </div>
            <div style={{marginBottom:'3rem'}}>
                {`<Input endIcon />`}
                <Input endIcon="endIcon" label="label" />
            </div>
            <div>
                {`<Input value="text" />`}
                <Input text="text" label="label" />
            </div>
            {/*<div>
                <div>
                    <p>{`<Input size="sm" />`}</p>
                    <label>Label<br />
                    <Input />
                    </label>
                </div>
                <div>
                    <p>{`<Input size="md" />`}</p>
                    <label>Label<br />
                    <Input />
                    </label>
                </div>
            </div>
            <div>
                <p>{`<Input fullwidth="md" />`}</p>
                <label>Label<br />
                <Input fillWidth="fillWidth" />
                </label>
            </div>
            <div>
                <p>{`<Input multiline row="4" />`}</p>
                <label>Label<br />
                <Input />
                </label>
            </div> */}
        </div>
    )
}

export default App;
