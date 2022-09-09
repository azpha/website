import React from 'react';

// components
import { TopBar, ClipShowcase } from '../PageComponents';

export class Home extends React.Component {
    render() {
        return (
            <div id={"home_page"}>
                <TopBar headline={"hi, i'm alex!"} subheading={"professional smooth brain, nodejs buillier, medal.tv whiffer"} />
                <ClipShowcase />
            </div>
        )
    }
}