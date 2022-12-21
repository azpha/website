import React from 'react';
import {NotFound} from './Pages';

export class Href extends React.Component {
    render() {
        if (this.props.url && this.props.content && this.props.tab) return (
            <a
                href={this.props.url}
                rel={"noreferrer"}
                target={this.props.tab}
            >{this.props.content}</a>
        )
    }
}

export class Redirector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: props.url,
            success: null
        }
    }

    async componentDidMount() {
        if (this.state.redirectTo) {
            window.location.href = this.state.redirectTo;
            this.state.success = true;
        }
        else await this.setState({success:false});
        console.log(this.state)
    }

    render() {
        return (
            <div id={"redirector"}>
                {!this.state.success ? <NotFound /> : null}
            </div>
        )
    }
}