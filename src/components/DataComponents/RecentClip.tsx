import DataComponent from '../DataComponent';
import type { MedalClip } from '@/utils/types';

const fetchData = async () => {
    const { data } = await fetch("https://api.alexav.gg/v4/social/medal", {
        method: 'get',
        next: { revalidate: 60 }
    }).then((res) => res.json())
    return data[0]
}

export default async function RecentClip() {
    const data = await fetchData() as MedalClip

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

    if (data) {
        return (
            <DataComponent
                url={translateToWebsiteUrl(data.directClipUrl)}
                header={"Clips I've taken"}
                projectHeader={data.contentTitle}
                projectSubheader={`${data.contentLikes} ${likeOrLikes(data.contentLikes)} | ${data.contentViews} ${viewOrViews(data.contentViews)}`}
                projectImage={data.contentThumbnail}
            />
        )
    } else {
        return (
            <DataComponent 
                header={"What I'm watching"}
                projectHeader={"No data :("}
                projectSubheader={"Nothing was returned"}
                url={"/"}
            />
        )
    }
}