import React from 'react'
import Input from "./input.js";


function App() {
    return (
        <div>
            <div>
                <p>{`<Input />`}</p>
                <label>Label<br />
                <Input input type="text" placeholder="Placeholder" />
                </label>
            </div>
            <div>
                <p>{`<Input error />`}</p>
                <label>Label<br />
                <Input type="text" placeholder="Placeholder" />
                </label>
            </div>
            <div>
                <p>{`<Input disabled />`}</p>
                <label>Label<br />
                <Input type="text" placeholder="Placeholder" />
                </label>
            </div>
        </div>
    )
}

export default App;
