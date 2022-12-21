import React from 'react';
import {Href} from './Utilities'

export class NavBar extends React.Component {
    render() {
        return (
            <div id={"nav"}>
                <ul style={{ paddingLeft:"0px" }} id={"nav-items"}>
                    {this.props.pages}
                    <div className={"social"}>
                        <a href={"https://twitter.com/zstreamss"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href={"https://social.thatalex.dev"} target={"_blank"} rel={"noreferrer"}>
                            <i className={"fa-brands fa-mastodon"} aria-hidden={"true"} />
                        </a>
                        <a href={"https://github.com/azpha"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa-brands fa-github" aria-hidden="true"></i>
                        </a>
                        <a href={"https://linkedin.com/in/thatalex"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href={"mailto:hi@thatalex.dev"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                </ul>
            </div>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <div id={"footer"}>
                <p>Made with <i style={{color:"red"}} className={"fa-solid fa-heart"} /> & <i style={{color:"gray"}} className={"fa-solid fa-music"} /> by Alex</p>
                <p><Href url={"https://github.com/azpha/website"} tab={"_blank"} content={"Source Code"} /></p>
            </div>
        )
    }
}

export class ShowcaseCard extends React.Component {
    render() {
        if (this.props.header && this.props.paragraph) return (
            <div id={"card"}>
                <div id={"card-content"}>
                    <div id={"card-header"}>
                        {this.props.url ? <Href url={this.props.url} tab={"_blank"} content={<h1>{this.props.header}</h1>} /> : <h1>{this.props.header}</h1>}
                    </div>
                    <div id={"card-paragraph"}>
                        <p>{this.props.paragraph}</p>
                    </div>
                </div>
            </div>
        )
    }
}