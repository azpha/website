import React from 'react';
import ReactDOM from 'react-dom/client';

// components/global styling
import { App } from './App';
import './main.css';

// react 18 compliance
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
)