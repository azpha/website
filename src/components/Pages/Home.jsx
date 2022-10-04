import React from 'react';

// components
import { ShowcaseBar,ShowcaseColumns,NotiModal,MedalPlayer } from '../PageComponents';
import { QueryStringObject } from "../Utils";

export class Home extends React.Component {
    componentDidMount() {
        console.log(QueryStringObject("ref"))
    }

    render() {
        return (
            <div id={"home_page"}>
                <ShowcaseBar headline={"hi, i'm alex!"} subheading={"professional smooth brain, nodejs buillier, medal.tv whiffer"} align={"left"} />
                <ShowcaseBar headline={"lotta cool stuff"} subheading={"what am i doin? well, workin at Medal + making stuff like this"} align={"right"} image={"https://cdn.medal.tv/assets/img/new-medal-logo-small.png"} alignImage={"left"} />
                <ShowcaseColumns
                    column1={
                        {
                            title: "wow cool stuff i've been workin on extra long too",
                            description: "look at me go, super fast. anyway so i was like and then but he and she and they and lololoolollolol"
                        }
                    }
                    column2={
                        {
                            title: "hooooly this is cool stuff",
                            description: "wow why am i offcentered"
                        }
                    }
                    column3={
                        {
                            title: "columns! pretty cool, right? like i said before?",
                            description: "The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks. wowowowowoo wowowwowoow wowowowowo"
                        }
                    }
                    />

                {/*<MedalPlayer/>*/}

                { QueryStringObject("ref") === "contact"
                ? <React.Fragment>
                        <NotiModal headline={"contact success!"} subheading={"i sent your message :)"} />
                    </React.Fragment>
                : ""
                }
            </div>
        )
    }
}