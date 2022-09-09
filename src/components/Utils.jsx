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