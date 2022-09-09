import React from 'react';

// components
import { MedalPlayer } from "./MedalPlayer";
import { Href } from "./Utils";

export class TopBar extends React.Component {
    render() {
        return (
            <div id={"topbar"}>
                <div className={"topbarcontent"}>
                    <h1>{this.props.headline}</h1>
                    <p>{this.props.subheading}</p>
                </div>
            </div>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <div id={"footer"}>
                <div className={"fcontent"}>
                    <p>Made with &lt;3 by <Href url={"https://github.com/zevhr"} blank={true} content={"Alex"}></Href></p>
                    <div className={"socials"}>
                        <Href url={"https://github.com/zevhr"} blank={true} content={<i className="fa fa-github item" aria-hidden="true"></i>} />
                        <Href url={"https://twitter.com/zstreamss"} blank={true} content={<i className="fa fa-twitter item" aria-hidden="true"></i>} />
                        <Href url={"https://github.com/zevhr"} blank={true} content={<i className="fa fa-spotify item" aria-hidden="true"></i>} />
                    </div>
                </div>
            </div>
        )
    }
}

export class ClipShowcase extends React.Component {
    render() {
        return (
            <div id={"clip"}>
                <MedalPlayer />
            </div>
        )
    }
}

export class ContactForm extends React.Component {
    render() {
        return (
            <div className={"form"}>
                <span className={"field-item"}>
                    <input type={"text"} className={"fields"} name={"name"} placeholder={"Name.."} />
                </span>
                <span className={"field-item"}>
                    <input type={"email"} className={"fields"} name={"email"} placeholder={"Email.."} />
                </span>
                <br />
                <br />
                <span>
                    <textarea name={"message"} style={{ textAlign: "center", }} className={"fields message"} placeholder={"Message.."}></textarea>
                </span>
            </div>
        )
    }
}