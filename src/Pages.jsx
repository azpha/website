import React from 'react';
import {ShowcaseCard} from "./Components";

export class HomePage extends React.Component {
    render() {
        return (
            <div id={"home"} className={"centered horizontally vertically"} style={{paddingBottom:"10%"}}>
                <div style={{ textAlign:"center" }}>
                    <div id={"profile"}>
                        <img width={"100px"} alt={"Profile"} src={"https://pbs.twimg.com/profile_images/1587882255740985346/5knCQsEd_400x400.jpg"} />
                        <h1 style={{color:"white"}}>Alex</h1>
                        <p style={{color:"white"}}>Just about everything QA @ <a href={"https://medal.tv"}>Medal.tv</a></p>
                    </div>
                    <ShowcaseCard
                        url={"https://github.com/azpha/splitstat"}
                        header={"SplitStat"}
                        paragraph={"SplitStat was a Discord bot that interfaced with Tracker Network's API to return and compare SplitStat: Arena Warfare stats with others."}
                    />
                    <ShowcaseCard
                        url={"https://pause.thatalex.dev"}
                        header={"Pause!"}
                        paragraph={"Pause my music. Website that controls my Spotify client using the full suite of controls; skip, pause, repeat, shuffle, volume, you name it!"}
                    />
                    <ShowcaseCard
                        url={"https://donotbro.me"}
                        header={"donotbrome"}
                        paragraph={"Just don't bro me. A website that one of my friends sparked me to make from starting conversations with one word; 'bro'."}
                    />
                </div>
            </div>
        )
    }
}

export class ContactPage extends React.Component {
    async sendMessage(event) {
        event.preventDefault()
        let data = new FormData(event.target)
        return fetch("https://ash-api.thatalex.dev/v3/tools/contact", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                "name": data.get("name"),
                "email": data.get("email"),
                "subject": "Website form submission",
                "message": data.get("message")
            })
        })
            .then(result => {
                if (result.ok) window.location.href="/?contact=success"
                else return window.location.href="?contact=fail";
            })
            .catch(err => {
                console.log('Contact request failed with error "' + err.message + '"');
                return window.location.href="?contact=fail";
            })
    }

    render() {
        return (
            <div id={"contact"} className={"centered horizontally vertically"}>
                <div id={"form-container"}>
                    <h1 style={{whiteSpace: "nowrap"}}>lets get in touch</h1>
                    <br />
                    <form onSubmit={this.sendMessage} style={{textAlign:"center"}}>
                        <label htmlFor={"name"}>Name:</label><br />
                        <input type={"name"} id={"name"} name={"name"} /><br />
                        <label htmlFor={"email"}>Email:</label><br />
                        <input type={"email"} id={"email"} name={"email"} /><br />
                        <label htmlFor={"message"}>Message:</label><br />
                        <input type={"message"} id={"message"} name={"message"} /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export class NotFound extends React.Component {
    render() {
        return (
            <div id={"error"} className={"centered horizontally vertically"} style={{bottom:"10%", lineHeight:"1.5em", color:"white", textAlign:"center"}}>
                <video autoPlay={true} loop={true} style={{pointerEvents: "none", width:"500px"}}>
                    <source src={"https://storage.thatalex.dev/content/polar_bear-v2.mp4"} type={"video/mp4"} />
                </video>
                <h1>Well, this is awkward..</h1>
                <p>You've landed on a page that just doesn't exist.<br />Enjoy this low-quality polar bear, traveller. You'll need it.</p>
            </div>
        )
    }
}