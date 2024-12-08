import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type GameAPIResponse = {
    data: GameData
}
type GameData = {
    name: string,
    location: string,
    startedOn: number,
    finished: boolean
}
export default function RecentGame() {
    const [ data, setData ] = useState<GameData>();
    const [ errorState, setErrorState ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(true);

    const getTime = (time: number) => {
        const date = new Date(time*1000);
        return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
    }

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/game", {
            method: "get"
        })
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json() as GameAPIResponse
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
                url={"https://medal.tv/u/alexav"}
                header={"Games I'm playing"}
                projectHeader={data.name}
                projectSubheader={
                    data.finished ? `Last played on ${getTime(data.startedOn)}`
                    : `Started on ${getTime(data.startedOn)}`
                }
                projectImage={"https://storage.alexav.gg/content/933d5523-5e20-4040-9fe9-b73552eac8ab.png"}
            />
        )
    } else {
        return <ProjectComponent 
            header={"Games I'm playing"}
            projectHeader={"No data :("}
            projectSubheader={loading ? "Loading data.." : "Something went wrong fetching data! " + errorState}
            url={"/"}
        />
    }
}