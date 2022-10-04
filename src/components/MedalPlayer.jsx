import React from 'react';

export class MedalPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clip: null
        }
    }

    componentDidMount() {
        fetch("https://developers.medal.tv/v1/latest?userId=215577&limit=1", {
            method: 'get',
            headers: {
                'content-type': "application/json",
                'accept': "application/json",
                'authorization': 'pub_RwznDA6FJLbPmRMSBH57iJetpujJUu6a'
            }
        }).then(async response => {
            let j = await response.json();
            await this.setState({
                clip: j.contentObjects[0]
            })
        })
    }

    playerRenderer() {
        if (this.state.clip) {
            return (
                <div id={"player"}>
                    <div id={"iframe"}>
                        <iframe
                            width={"640"}
                            height={"360"}
                            style={{maxWidth: "100vw"}}
                            title={"MedalPlayer"}
                            src={this.state.clip.directClipUrl}
                            frameBorder={"0"}
                            allow={"autoplay"}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <p className={"cliptitle"}>{this.state.clip.contentTitle} -- recorded with <span className={"medaltv"}>Medal.tv</span></p>
                </div>
            )
        } else {
            return (
                <div id={"player"}>
                    <p>wasn't able to get response</p>
                </div>
            )
        }
    }

    render() {
        if (this.state.clip !== null) return this.playerRenderer()
    }
}