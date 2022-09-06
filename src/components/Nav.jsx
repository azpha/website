import React from 'react';
import { pages } from '../index';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
    list = pages.map((page, i) => {
        return <li className={"listitem button"} key={"page_" + page.key}>
            <Link to={page.path}>{page.display}</Link>
        </li>
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