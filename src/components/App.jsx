import React from 'react';

// components/resources
import { NavBar } from './Nav';

export class App extends React.Component {
    render() {
        return (
            <div id={"container"}>
                <NavBar/>
            </div>
        )
    }
}