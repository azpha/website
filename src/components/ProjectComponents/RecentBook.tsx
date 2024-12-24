import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';
import type { ContentTrackerItem } from '../../utils/types';

export default function RecentBook() {
    const [ data, setData ] = useState<ContentTrackerItem | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ errorState, setErrorState ] = useState<string>("");

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/tracker/latest/book", {
            method: 'get'
        })
        .then(async (res) => {    
            if (res.ok) {
                const json = await res.json();
                setData(json.data);
                setLoading(false);
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

    const getDateString = (startedOn: Date, finished: boolean) => {
        if (startedOn && !finished) {
            const startedOnDate = new Date(startedOn);
            return "Started on " + startedOnDate.toLocaleDateString();
        } else if (finished) {
            return "Finished!"
        } else {
            return "Just Added"
        }
    }

    if (data && !loading) {
        return (
            <ProjectComponent 
                header={"What I'm reading"}
                projectHeader={data.title}
                projectSubheader={getDateString(data.startedOn, data.finished)}
                url={"https://tracker.alexav.gg/?type=books&id=" + data.id}
                projectImage={data.image}
            />
        )
    } else {
        return (
            <ProjectComponent 
                header={"What I'm reading"}
                projectHeader={"No data :("}
                projectSubheader={loading ? "Loading data.." : "Something went wrong fetching data! " + errorState}
                url={"/"}
            />
        )
    }
}