import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type BookDataResponse = {
    status: number,
    data: BookData
};
type BookData = {
    id: number,
    title: string,
    author: string,
    description: string,
    imageKey: string,
    finished: boolean,
    startedOn: Date,
    createdAt: Date,
    updatedAt: Date,
    createdById: string   
}

export default function RecentWatch() {
    const [ data, setData ] = useState<BookData | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ errorState, setErrorState ] = useState<string>("");

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/books", {
            method: 'get'
        })
        .then(async (res) => {    
            if (res.ok) {
                const json = await res.json() as BookDataResponse;
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
                header={"What I'm reading"}
                projectHeader={data.title}
                projectSubheader={ data.finished ? "Finished!" : "Started on " + parseDate(data.startedOn) }
                url={"https://tracker.alexav.gg/?type=books&id=" + data.id}
                projectImage={data.imageKey}
                projectImageSize={"30"}
            />
        )
    } else {
        return (
            <>
                <h1 className="font-bold text-2xl">No data :(</h1>
                <p>Check out <a className="underline" href="https://tracker.alexav.gg" target="_blank">tracker.alexav.gg</a> if this isn't working.</p>
                <p className="text-sm italic">{errorState}</p>
            </> 
        )
    }
}