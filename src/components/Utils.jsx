import React from 'react';

export class Href extends React.Component {
    render() {
        return (
            <a
                href={this.props.url}
                target={this.props.blank ? "_blank" : "_self"}
                rel={"noreferrer"}
            >{this.props.content}</a>
        )
    }
}

export function QueryStringObject(string) {
    let params = new URLSearchParams(window.location.search);

    if (params.get(string)) return params.get(string);
    else return false;
}