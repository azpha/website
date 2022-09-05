import React from 'react';
import ReactDOM from 'react-dom/client';

// components/global styling
import { App } from './components/App';
import './styling/anims.css';
import './styling/main.css';

// "sitemap" for react components
export const pages = [
    {
        "display": "Home",
        "path": "/",
        "key": "home"
    },
    {
        "display": "Contact",
        "path": "/contact",
        "key": "contact"
    }
]

// react 18 compliance
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App d={pages} />)