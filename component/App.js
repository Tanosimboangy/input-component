import React from 'react'
import Input from "./input.js";


function App() {
    return (
        <div style={{maxWidth:'800px', margin:'auto'}}>
            <h1 style={{color:'blue', fontFamily:'sans-serif'}}>Jacquit input component</h1>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {` < input />`}
                <Input default_hover="default_hover" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input error />`}
                <Input error="error" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input disabled />`}
                <Input disabled="disabled" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input helperText="Some interesting text" />`}
                <Input 
                helperTexts="helperTexts" helperText="Some interesting text"
                label="label" 
                />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input helperText="Some interesting text" error />`}
                <Input 
                helperTexts="helperTexts"  
                helperText="Some interesting text" error="error"
                label="label" 
                />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input startIcon />`}
                <Input startIcon="startIcon" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input endIcon />`}
                <Input endIcon="endIcon" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input value="text" />`}
                <Input text="text" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input size="sm" />`}
                <Input sm="sm" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input size="md" />`}
                <Input md="md" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input fullwidth />`}
                <Input fillWidth="fillWidth" label="label" />
            </div>
            <div style={{marginBottom:'3rem', marginInlineEnd:'3rem'}}>
                {`<Input multiline row="4" />`}
                <Input multiline="multiline" label="label" />
            </div>
        </div>
    )
}

export default App;
