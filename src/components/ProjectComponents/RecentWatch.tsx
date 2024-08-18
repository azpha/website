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

    if (data && !loading) {
        return (
            <ProjectComponent 
                header={"What I'm watching"}
                projectHeader={data.title}
                projectSubheader={ data.finished ? "Finished!" : "Started on " + parseDate(data.startedOn) }
                url={"https://watch.alexav.gg/?id=" + data.id}
                projectImage={data.imageKey}
                projectImageSize={"30"}
            />
        )
    } else {
        return (
            <>
                <h1 className="font-bold text-2xl">No data :(</h1>
                <p>Check out <a className="underline" href="https://watch.alexav.gg" target="_blank">watch.alexav.gg</a> if this isn't working.</p>
                <p className="text-sm italic">{errorState}</p>
            </> 
        )
    }
}