import React from 'react'
import Input from "./input.js";


function App() {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{marginBottom:'1rem'}}>
                {` < input />`}
                <Input default_hover="default_hover" label="label" />
            </div>
            <div style={{marginBottom:'1rem'}}>
                {`<Input error />`}
                <Input error="error" label="label" />
            </div>
            <div style={{marginBottom:'1rem'}}>
                {`<Input disabled />`}
                <Input disabled="disabled" label="label" />
            </div>
            <div style={{marginBottom:'1rem'}}>
                {`<Input helperText="Some interesting text" />`}
                <Input helperText="helperText" label="label" />
                <span>Some intersting text</span>
            </div>
            {/* <div style={{display:'inline-block', marginRight:'3rem'}}>
                <p>{`<Input helperText="Some interesting text" error />`}</p>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Input helperTextErr="helperTextErr" />
                    <label>Label</label>
                    <span>Some intersting text</span>
                </div>
            </div> */}
            {/*<div style={{display:'inline-block'}}>
                <p>{ style={{display:'grid'}}`<Input startIcon />`}</p>
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
            </div> */}
        </div>
    )
}

export default App;
