import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App' // import the App.js I just created

// ReactDOM.render(<h1>Feedback Zone</h1>, document.getElementById('root'))

ReactDOM.render(
    <React.StrictMode><App></App></React.StrictMode>
    , document.getElementById('root')) // instead of the html element, I can just pass the App component