import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Entry point of the React application.
 * 
 * Renders the `App` component into the root element of the DOM.
 * Includes global styles and wraps the `App` component in `React.StrictMode` for development checks.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
