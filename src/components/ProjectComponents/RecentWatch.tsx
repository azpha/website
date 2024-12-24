import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type WatchData = {
    id: number,
    title: string,
    description: string,
    author?: string,
    image: string,
    episode?: string,
    tmdbId?: string,
    finished: boolean,
    startedOn?: Date,
    createdAt: Date,
    updatedAt: Date,
    createdById: string   
}

export default function RecentWatch() {
    const [ data, setData ] = useState<WatchData | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ errorState, setErrorState ] = useState<string>("");

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/tracker/latest/tv", {
            method: 'get'
        })
        .then(async (res) => {    
            if (res.ok) {
                const json = await res.json();
                setData(json.data);
                setLoading(false)
            } else {
                setErrorState("Failed to fetch data!");
                setLoading(false);
            }
        })
        .catch((e) => {
            setLoading(false);
            setErrorState(e.message)
        })
    }, []);

    const getSubheaderText = () => {
        if (data?.finished) {
            return "Finished!"
        } else if (data?.startedOn) {
            return "Last update on " + new Date(data.updatedAt).toLocaleDateString()
        } else {
            return "Just Added"
        }
    }

    if (data && !loading) {
        return (
            <ProjectComponent 
                header={"What I'm watching"}
                projectHeader={data.title}
                projectSubheader={ getSubheaderText() }
                url={"https://tracker.alexav.gg/?type=tv&id=" + data.id}
                projectImage={data.image}
            />
        )
    } else {
        return (
            <ProjectComponent 
                header={"What I'm watching"}
                projectHeader={"No data :("}
                projectSubheader={loading ? "Loading data.." : "Something went wrong fetching data! " + errorState}
                url={"/"}
            />
        )
    }
}