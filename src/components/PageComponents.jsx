import React from 'react';

// components
import { MedalPlayer } from "./MedalPlayer";
import { Href } from "./Utils";

export class ShowcaseBar extends React.Component {
    render() {
        return (
            <div id={"bar"}>
                <div
                    className={this.props.align === "right" ? "showcase_content align-showcase-right" : "showcase_content align-showcase-left"}>
                    {this.props.image ? <React.Fragment>
                    <span id={"bar-img"} style={{verticalAlign:"right", display: "inline-block", float:this.props.alignImage}}>
                        <img src={this.props.image} alt={"Showcase"} />
                    </span>
                    </React.Fragment> : <React.Fragment></React.Fragment>}
                    <h1 style={{display:"inline-block"}}>{this.props.headline}</h1>
                    <span id={"subheading"}><p>{this.props.subheading}</p></span>
                </div>
            </div>
        )
    }
}

export class ShowcaseColumns extends React.Component {
    render() {
        return (
            <div style={{ paddingLeft: "19vw" }}>
                <div style={{ height:"100vh", paddingRight:"0 50vw" }} id={"bar-column"} className={"row"}>
                    <div className={"column"}>
                        <p className={"column-header"}>
                            {this.props.column1.title}
                        </p>
                        <p className={"column-subheader"}>
                            {this.props.column1.description}
                        </p>
                    </div>
                    <div className={"column"}>
                        <p className={"column-header"}>
                            {this.props.column2.title}
                        </p>
                        <p className={"column-subheader"}>
                            {this.props.column2.description}
                        </p>
                    </div>
                    <div className={"column"}>
                        <p className={"column-header"}>
                            {this.props.column3.title}
                        </p>
                        <p className={"column-subheader"}>
                            {this.props.column3.description}
                        </p>
                    </div>
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
                    <p>Made with &lt;3 by <Href url={"https://github.com/zevhr"} blank={true} content={"Alex"} /></p>
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

export class ContactForm extends React.Component {
    sendResponse() {
        // todo: logic to send message via api endpoint
    }

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

export class NotFound extends React.Component {
    componentDidMount() {
        let keys = [];
        let count = 0;

        document.addEventListener("keydown", (e) => {
            if (e.keyCode <= 90 && e.keyCode >= 48) {
                keys.push(e.key);
            }
            if (e.key.toLowerCase() === "backspace") {
                keys.pop();
            } else if (keys.join('') === "thisisnotadrill") {
                if (count >= 5) {
                    window.location.href = "/capy";
                } else {
                    document.getElementById("lawd").style.display = "block";
                    document.getElementById("anim").style.display = "block";

                    setTimeout(() => {
                        document.getElementById("lawd").style.display = "none";
                        document.getElementById("anim").style.display = "none";
                        keys = [];
                        count++;

                        console.log("count: " + count)
                    }, 4000)
                }
            }
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "black", height:"100vh", textAlign: "center", color:"white" }} id={"404"}>
                <img width={"350"} alt={"jeremi"} src={"https://im3.ezgif.com/tmp/ezgif-3-b699b91275.gif"}/>
                <span style={{ fontSize: "20px" }}>
                    <h3>well that's not good.</h3>
                    <p>this page doesn't exist. you should get outta here pal, before things get bad</p>
                </span>

                <span id={"lawd"} style={{ display: "none" }}><p>oh lawd... oh lawd he comin!</p></span>
                <div id={"anim"} style={{ display: "none" }}>
                    <img style={{ transform: "scaleX(-1)" }} alt={"capy"} src={"https://c.tenor.com/AMMqaJ99koYAAAAC/capybara-walk.gif"} />
                </div>
            </div>
        )
    }
}