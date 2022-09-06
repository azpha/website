import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components/resources
import { NavBar } from './Nav';
import { Home } from './Home';
import { Contact } from './Contact';

export class App extends React.Component {
    render() {
        return (
            <div id={"container"}>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </div>
        )
    }
}