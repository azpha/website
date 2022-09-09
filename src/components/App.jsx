import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components/resources
import { NavBar } from './Nav';
import { Footer } from './PageComponents'

// pages
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';

export class App extends React.Component {
    render() {
        return (
            <div id={"container"}>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
                <Footer/>
            </div>
        )
    }
}