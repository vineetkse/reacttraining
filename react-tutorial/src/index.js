// Import the React and ReactDOM libraries 
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component

const App = () => {

    const buttonText = 'Click Me!';

    return (
        <div>
            <label className='label' htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{background: '#560680', border: 'none', 'color': '#FFFFFF'}}>{buttonText}</button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))