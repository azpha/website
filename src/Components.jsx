import React from 'react';
import { socket } from './Services';

export class NavBar extends React.Component {
    render() {
        return (
            <div id={"nav"}>
                <ul style={{ paddingLeft:"0px" }} className={"nav-items"}>
                    {this.props.pages}
                </ul>
                <hr style={{width:"300px"}} />
            </div>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <div id={"footer"}>
                <p>Website by <a href={"https://github.com/zevhr/pause"} target={"_blank"} rel={"noreferrer"}>Alex</a></p>
                <div className={"footeritems"}>
                    <SocialMedia />
                </div>
            </div>
        )
    }
}

export class IFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            d: null,
            userSetVolume: null
        }

        socket.emit("spotify", {"event":"listen"});
        socket.on("api_update", async (message) => {
            if (message) await this.setState({ d: message })
        })
    }

    render() {
        if (!this.state.d) return (
            <div />
        )

        return (
            <div id={"iframe"} style={{width:"50%",top:"10%"}}>
                <div id="player" className={"player centered horizontally"}>
                    <span className={"songinfo"}>
                        { this.state.d ? <React.Fragment><p>{this.state.d.TITLE}<br />{this.state.d.ARTIST}</p><p>{this.state.d.POSITION} \\ {this.state.d.DURATION}</p></React.Fragment> : <p>Uh oh! Something went wrong.</p>}
                    </span>
                </div>
            </div>
        )
    }
}

export class SocialMedia extends React.Component {
    render() {
        return (
            <div className={"social"}>
                <a href={"https://twitter.com/zstreamss"} target={"_blank"} rel={"noreferrer"}>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                <a href={"https://github.com/azpha"} target={"_blank"} rel={"noreferrer"}>
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a href={"https://linkedin.com/in/thatalex"} target={"_blank"} rel={"noreferrer"}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href={"mailto:hi@thatalex.dev"} target={"_blank"} rel={"noreferrer"}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
}