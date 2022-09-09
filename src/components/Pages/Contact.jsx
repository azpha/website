import React from 'react';

import { TopBar, ContactForm } from "../PageComponents";

export class Contact extends React.Component {
    render() {
        return (
            <div id={"container"}>
                <TopBar headline={"you want to contact me?"} subheading={"at least take me to dinner first"} />
                <div id={"contact"}>
                    <h1 style={{ textAlign: "center", color: "white" }}>hit my line, like the cool kids say</h1>
                    <ContactForm />
                </div>
            </div>
        )
    }
}