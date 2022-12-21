import React from 'react';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import {NavBar,Footer} from "./Components";
import {HomePage,ContactPage,NotFound} from "./Pages";

const pages = [
    {
        "slug": "home",
        "path": "/"
    },
    {
        "slug": "contact",
        "path": "/contact"
    }
]

export class App extends React.Component {
    renderPageLinks() {
        return pages.map((page) => {
            return <a href={page.path} key={page.slug} rel={"noreferrer"} target={"_self"}><li className={"nav-links"}>{page.slug}</li></a>
        })
    }

    render() {
        return (
           <div id={"container"}>
               <NavBar pages={this.renderPageLinks()} />
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/contact"} element={<ContactPage />} />
                        <Route path={"*"} element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
               <Footer />
           </div>
        )
    }
}