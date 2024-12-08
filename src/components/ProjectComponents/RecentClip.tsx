import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type MedalAPIResponse = {
    data: MedalClip[]
}
type MedalClip = {
    contentId: string,
    contentTitle: string,
    contentViews: number,
    contentLikes: number,
    contentThumbnail: string,
    directClipUrl: string
}

export default function RecentClip() {
    const [ data, setData ] = useState<MedalClip[]>();
    const [ errorState, setErrorState ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(true);

    const translateToWebsiteUrl = (url: string) => {
        return url.replace('/clip/', "/clips/")
    }

    // i'm a neat man what can i say
    const likeOrLikes = (likes: number) => {
        return (likes > 1 && likes !== 0) ? "likes" : "like" 
    }
    const viewOrViews = (views: number) => {
        return (views > 1 && views !== 0) ? "views" : "view" 
    }

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/medal", {
            method: "get"
        })
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json() as MedalAPIResponse
                setData(data.data);
            } else {
                setErrorState("Failed to load! :(")
            }
        })
        .catch((e: Error) => {
            setErrorState(e.message)
        })

        setLoading(false);
    }, []);

    if (!loading && data) {
        return (
            <ProjectComponent 
                url={translateToWebsiteUrl(data[0].directClipUrl)}
                header={"Clips I've taken"}
                projectHeader={data[0].contentTitle}
                projectSubheader={`${data[0].contentLikes} ${likeOrLikes(data[0].contentLikes)} | ${data[0].contentViews} ${viewOrViews(data[0].contentViews)}`}
                projectImage={data[0].contentThumbnail}
            />
        )
    } else {
        return <ProjectComponent 
            header={"Clips I've taken"}
            projectHeader={"No data :("}
            projectSubheader={loading ? "Loading data.." : "Something went wrong fetching data! " + errorState}
            url={"/"}
        />
    }
}