import DataComponent from '../DataComponent';
import type { MusicData } from '@/utils/types';

const fetchData = async () => {
    const { data } = await fetch("https://api.alexav.gg/v4/social/music", {
        method: 'get'
    }).then((res) => res.json())
    return data.tracks[0]
}

export default async function RecentListen() {
    const data = await fetchData() as MusicData

    if (data) {
        return (
            <DataComponent
                url={"https://last.fm/user/lulawex"}
                header={"Music I'm listening to"}
                projectHeader={data.name}
                projectSubheader={data.artist["#text"]}
                projectImage={data.image.filter((v) => v.size === "medium")[0]["#text"]}
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