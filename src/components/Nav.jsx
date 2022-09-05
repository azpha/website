import React from 'react';
import { pages } from '../index';

export class NavBar extends React.Component {
    list = pages.map((page, i) => {
        return <li className={"listitem button"} key={"page_" + page.key}><a href={page.path}>{page.display}</a></li>
    })

    render() {
        return (
            <div id="navbar">
                <ul className="pagelist">
                    {this.list}
                </ul>
            </div>
        )
    }
}