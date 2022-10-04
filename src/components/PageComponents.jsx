import React from 'react';

// components
import { Href, QueryStringObject } from "./Utils";

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
                <div style={{ maxHeight:"93vh", height:"40%" }} id={"bar-column"} className={"row"}>
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
    sendResponse(obj) {
        console.log(obj)
        if (!obj.name || !obj.message || !obj.email) {
            document.getElementById("notification").innerText = "ensure all fields are filled out"
            setTimeout(() => {
                document.getElementById("notification").innerText = "";
            }, 5000)
        } else {
            fetch("https://api.zephmakes.tech/v2/tools/contact", {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: obj.email,
                    subject: obj.name,
                    message: obj.message
                })
            })
                .then(response => {
                    if (response.ok) window.location.href = "/?ref=contact"
                    else {
                        document.getElementById("notification").innerText = "something went wrong, server returned status code " + response.status
                        setTimeout(() => {
                            document.getElementById("notification").innerText = "";
                        }, 5000)
                    }
                })
                .catch(err => {
                    document.getElementById("notification").innerText = "something went wrong!"
                    setTimeout(() => {
                        document.getElementById("notification").innerText = "";
                    }, 5000)
                })
        }
    }

    render() {
        return (
            <div className={"form"}>
                <span className={"field-item"}>
                    <input type={"text"} className={"fields"} id="name" name={"name"} placeholder={"Name.."} />
                </span>
                <span className={"field-item"}>
                    <input type={"email"} className={"fields"} id={"email"} name={"email"} placeholder={"Email.."} />
                </span>
                <br />
                <br />
                <span>
                    <textarea id={"message"} name={"message"} style={{ textAlign: "center" }} className={"fields message"} placeholder={"Message.."}></textarea>
                </span>

                <button
                    type={"button"}
                    id={"submit-button"}
                    onClick={() => this.sendResponse({
                        "email": document.getElementById("email").value,
                        "name": document.getElementById("name").value,
                        "message": document.getElementById("message").value
                    })}
                >Submit</button>
                <p id={"notification"}></p>
            </div>
        )
    }
}

export class NotiModal extends React.Component {
    componentDidMount() {
        let div = document.getElementById("modal_container");
        setTimeout(() => {
            div.style.display = "none";
        },10000)
    }

    render() {
        return (
            <div id={"modal_container"}>
                <div id={"modal"}>
                    <p className={"modal_header"}>{this.props.headline}</p>
                    <p className={"modal_subheading"}>{this.props.subheading}</p>
                </div>
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
            } else if (keys.join('') === "capybara") {
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
                    }, 3000)
                }
            }
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "black", height:"90vh", textAlign: "center", color:"white" }} id={"404"}>
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

export class MedalPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clip: null
        }
    }

    componentDidMount() {
        fetch("https://developers.medal.tv/v1/latest?userId=215577&limit=1", {
            method: 'get',
            headers: {
                'content-type': "application/json",
                'accept': "application/json",
                'authorization': 'pub_RwznDA6FJLbPmRMSBH57iJetpujJUu6a'
            }
        }).then(async response => {
            let j = await response.json();
            await this.setState({
                clip: j.contentObjects[0]
            })
        })
    }

    playerRenderer() {
        if (this.state.clip) {
            return (
                <div id={"player"} className={"center"}>
                    <div id={"iframe"}>
                        <iframe
                            width={"640"}
                            height={"360"}
                            style={{maxWidth: "100vw"}}
                            title={"MedalPlayer"}
                            src={this.state.clip.directClipUrl}
                            frameBorder={"0"}
                            allow={"autoplay"}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <p className={"cliptitle"}>{this.state.clip.contentTitle} -- recorded with <span className={"medaltv"}>Medal.tv</span></p>
                </div>
            )
        } else {
            return (
                <div id={"player"}>
                    <p>wasn't able to get response</p>
                </div>
            )
        }
    }

    render() {
        if (this.state.clip !== null) return this.playerRenderer()
    }
}