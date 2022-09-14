import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './main.css';

let possible_pages = [
    "www",
    "index.html",
    "index.php",
    "index.htm",
    "index.cgi",
    "index.shtml",
    "example",
    "index",
    "index.php5",
    "doubleudoubleudoubleu",
    "home",
    "welcome",
    "pog",
    "wow",
    "corgi"
]

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />} />
                <Route path={"/success"} element={<Success />} />
                <Route path={window.location.pathname} element={<Message />} />
            </Routes>
        </BrowserRouter>
    )
}

class App extends React.Component {
    render() {
        return (
            <div id={"container"}>
                <a className={"link"} href={(window.location.href + possible_pages[Math.floor(Math.random()*possible_pages.length)])}>enter the website</a>
                <div className={"jumbotron centered"}>
                    <span className={"content centered"}>
                        <p>welcome to my website!</p>
                    </span>
                </div>
            </div>
        )
    }
}

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            "message": null,
            "fetchCache": null
        }
    }

    async componentDidMount() {
        if (window.location.pathname.split('/').length >= 100) return window.location.pathname = "/success";
        let possible_message;

        if (this.state.fetchCache) {
            possible_message = this.state.fetchCache
            console.log('[cache] request was cached, accessing the cache')
        } else {
            possible_message = await fetch("https://api.zephmakes.tech/v1/tools/website-message").then(response => response.json());
            this.state.fetchCache = possible_message
            console.log('[cache] request wasnt cached, requesting')
        }

        if (this.state.message) {
            // remove the previous message from the array & define a variable
            possible_message.phrases.splice(possible_message.phrases.indexOf(this.state.message), 1);
            let message = possible_message.phrases[Math.floor(Math.random() * possible_message.phrases.length)].phrase

            // readd the variable
            possible_message.phrases.push(this.state.message)

            // reset the message state
            await this.setState({ message });
            window.localStorage.setItem("state", JSON.stringify(this.state))
        } else {
            let message = possible_message.phrases[Math.floor(Math.random() * possible_message.phrases.length)].phrase
            await this.setState({ message });
            window.localStorage.setItem("state", JSON.stringify(this.state))
        }
    }


    render() {
        return (
            <div id={"container"}>
                <a className={"link"} href={(window.location.href + "/" + possible_pages[Math.floor(Math.random()*possible_pages.length)])}>enter the website</a>
                <div className={"jumbotron centered"}>
                    <span className={"content centered"}>
                        <p>
                            {this.state.message}
                            <br />
                        </p>
                    </span>
                </div>
            </div>
        )
    }
}

class Success extends React.Component {
    componentDidMount() {
        window.localStorage.clear();
    }

    render() {
        return (
            <div id={"container"}>
                <div className={"jumbotron centered"}>
                    <span className={"content centered"}>
                        <p>
                            okay okay, you've fought hard.<br />click <a href={"https://youtu.be/dgha9S39Y6M?t=35"}>here</a> to enter.
                        </p>
                    </span>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Router());

