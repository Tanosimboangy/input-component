import React from 'react'
import Input from "./input.js";


function App() {
    return (
        <div>
            <div>
                <div style={{display:"inline-block"}}>
                    <p>{`<Input:hover />`}</p>
                    <div style={{display:'flex', flexDirection:'column-reverse'}}>
                        <Input id="head" default_hover="default_hover" />
                        <label for="head">Label</label>
                    </div>
                </div>
                <div style={{display:"inline-block"}}> 
                    <p>{`<Input:focus />`}</p>
                    <div style={{display:'flex', flexDirection:'column-reverse'}}>
                        <Input id="focus" default_focus="default_focus" />
                        <label for="focus" default_focus="default_focus" >Label</label>
                    </div>
                </div>
            </div>
            <div style={{display:'inline-block'}}>
                <p>{`<Input error />`}</p>
                <div style={{display:'flex', flexDirection:'column-reverse'}}>
                    <Input id="error" error="error" />
                    <label for="error">Label</label>
                </div>
            </div>
            <div>
                <p>{`<Input disabled />`}</p>
                <label>Label<br />
                    <Input disabled="disabled" />
                </label>
            </div>
            <div>
                <p>{`<Input helperText="Some interesting text" />`}</p>
                <label for="helperText">Label<br />
                    <Input id="helperText" helperText="helperText" /><br/>
                Some intersting text
                </label>
            </div>
            <div>
                <p>{`<Input helperText="Some interesting text" error />`}</p>
                <label>Label<br />
                    <Input helperTextErr="helperTextErr" /><br />
                Some intersting text
                </label>
            </div>
            <div>
                <p>{`<Input startIcon />`}</p>
                <label>Label<br />
                <Input />
                </label>
            </div>
            <div>
                <p>{`<Input endIcon />`}</p>
                <label>Label<br />
                <Input />
                </label>
            </div>
            <div>
                <p>{`<Input value="text" />`}</p>
                <label>Label<br />
                <Input />
                </label>
            </div>
            <div>
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
            </div>
        </div>
    )
}

export default App;
