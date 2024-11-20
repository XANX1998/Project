// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the `render` method on `root`
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
