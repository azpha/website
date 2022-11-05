import React from 'react';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import {NavBar,Footer} from "./Components";
import {Redirector} from './Utilities';
import {HomePage,AboutPage,NotFound} from "./Pages";

const pages = [
    {
        "slug": "home",
        "path": "/",
        "display": "Home"
    },
    {
        "slug": "about",
        "path": "/about",
        "display": "About"
    }
]

export class App extends React.Component {
    renderPageLinks() {
        return pages.map((page) => {
            return <a href={page.path} key={page.slug} rel={"noreferrer"} target={"_self"}><li className={"nav-links"}>{page.display}</li></a>
        })
    }

    render() {
        return (
           <div id={"container"}>
               <NavBar pages={this.renderPageLinks()} />
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/about"} element={<AboutPage />} />
                        <Route path={"/capy"} element={<Redirector url={"https://www.youtube.com/watch?v=oLsVrshvOaI"} />} />
                        <Route path={"*"} element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
               <Footer />
           </div>
        )
    }
}