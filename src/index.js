import React from "react";
import ReactDOM from 'react-dom' // deprecated in React 18
import { createRoot } from 'react-dom/client';  // Updated import
import './index.css'
import App from './App' // import the App.js I just created

// ReactDOM.render(<h1>Feedback Zone</h1>, document.getElementById('root'))

// ReactDOM.render(
//     <React.StrictMode><App></App></React.StrictMode>
//     , document.getElementById('root')) // instead of the html element, I can just pass the App component
// Note: The traditional ReactDOM.render method is deprecated in favor of a new approach that uses createRoot.

const container = document.getElementById('root');
const root = createRoot(container);  // Create a root.
root.render(<App />);  // Use the render method on the root