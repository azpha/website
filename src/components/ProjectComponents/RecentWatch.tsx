import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type WatchDataResponse = {
    status: number,
    data: WatchData
};
type WatchData = {
    id: number,
    title: string,
    description: string,
    imageKey: string,
    currentEpisode: string,
    tmdbID: string,
    finished: boolean,
    startedOn: Date,
    createdAt: Date,
    updatedAt: Date,
    createdById: string   
}

export default function RecentWatch() {
    const [ data, setData ] = useState<WatchData | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ errorState, setErrorState ] = useState<string>("");

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/watch", {
            method: 'get'
        })
        .then(async (res) => {    
            if (res.ok) {
                const json = await res.json() as WatchDataResponse;
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

    const parseDate = (date: Date) => {
        const jsDate = new Date(date);
        return `${jsDate.getFullYear()}/${jsDate.getMonth() + 1}/${jsDate.getDate()}`;
    }
    const getSubheaderText = () => {
        if (data?.finished) {
            return "Finished!"
        } else if (data?.startedOn) {
            return "Started on " + parseDate(data.startedOn)
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
                projectImage={data.imageKey}
                projectImageSize={"30"}
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