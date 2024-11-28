import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';
import type { MusicData, MusicAPIResponse } from '../../utils/types';

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
                header={"Music I'm listening to"}
                projectHeader={data[0].name}
                projectSubheader={data[0].artist["#text"]}
                projectImage={data[0].image.filter((v) => v.size === "medium")[0]["#text"]}
                projectImageSize={"50"}
            />
        )
    } else {
        return <ProjectComponent 
            header={"Music I'm listening to"}
            projectHeader={"No data :("}
            projectSubheader={loading ? "Loading data.." : "Something went wrong fetching data! " + errorState}
            url={"/"}
        />
    }
}