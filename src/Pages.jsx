import React from 'react';
import {IFrame, SocialMedia} from "./Components";

export class HomePage extends React.Component {
    render() {
        return (
            <div id={"home"}>
                <div id={"profile"} className={"centered horizontally vertically"}>
                    <img width={"100px"} src={"https://pbs.twimg.com/profile_images/1587882255740985346/5knCQsEd_400x400.jpg"} />
                    <h1>Alex</h1>
                    <p>QA @ <a href={"https://medal.tv"}>Medal.tv</a>, JS/Java Dev</p>
                    <SocialMedia />
                </div>
            </div>
        )
    }
}

export class AboutPage extends React.Component {
    render() {
        return (
            <div id={"about"} className={"centered horizontally vertically"} style={{
                paddingTop:"10px",
                padding:"10px",
                textAlign: "center"
            }}>
                <h1>Hi, I'm Alex!</h1>
                <p>I'm a JavaScript/Java/Python developer, currently working at Medal.tv as a Manual QA Tester!</p>
                <h2>What do I like to do?</h2>
                <p>Well, coding is one thing. I enjoy making random apps in any language, including this website!</p>
                <p>I'm exploring the realm of test automation & getting more familiar with best practices.</p>
                <p>I also enjoy listening to music a little too much. Like, it's bad.</p>
                <hr style={{width:"300px"}} />
                <h2>What am I listening to right now?</h2>
                <p style={{}}><i>Want to screw with my music? <a href={"https://pause.thatalex.dev"} rel={"noreferrer"} target={"_blank"}>Use my 'Pause!' website!</a></i></p>
                <IFrame />
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
                    }, 3000)
                }
            }
        })
    }

    render() {
        return (
            <div id={"error"} className={"centered horizontally vertically"} style={{bottom:"10%", lineHeight:"0.5"}}>
                <h1>Well, this is awkward..</h1>
                <p>You've landed on a page that just doesn't exist.</p>
                <p>You should, like, <a href={"#"} onClick={() => window.history.back()}>head back now..</a></p>

                <span id={"lawd"} style={{ display: "none", color:"red" }}><p>oh lawd... oh lawd he comin!</p></span>
                <div id={"anim"} style={{ display: "none" }}>
                    <img style={{ transform: "scaleX(-1)" }} alt={"capy"} src={"https://c.tenor.com/AMMqaJ99koYAAAAC/capybara-walk.gif"} />
                </div>
            </div>
        )
    }
}