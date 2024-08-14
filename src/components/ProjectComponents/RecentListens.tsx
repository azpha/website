import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type MusicAPIResponse = {
    data: {
        tracks: MusicData[]
    }
}

type MusicData = {
    artist: {
        mbid: string,
        "#text": string
    },
    mbid: string,
    album: {
        mbid: string,
        "#text": string,
    },
    name: string,
    url: string,
    image: MusicImage[]
}

type MusicImage = {
    size: string,
    "#text": string
}

export default function RecentListens() {
    const [ data, setData ] = useState<MusicData[]>();
    const [ errorState, setErrorState ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/music", {
            method: "get"
        })
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json() as MusicAPIResponse
                setData(data.data.tracks);
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
                url={"https://last.fm/user/lulawex"}
                header={data[0].name}
                subheader={data[0].artist["#text"]}
                image={data[0].image.filter((v) => v.size === "large")[0]["#text"]}
            />
        )
    } else {
       <>
        <h1 className="font-bold text-2xl">No data :(</h1>
        <p>Check out <a className="underline" href="https://last.fm/user/lulawex" target="_blank">last.fm/lulawex</a> if this isn't working.</p>
        <p className="text-sm italic">{errorState}</p>
       </> 
    }
}