import DataComponent from '../DataComponent';
import type { GameData } from '@/utils/types';

const fetchData = async () => {
    const { data } = await fetch("https://api.alexav.gg/v4/game", {
        method: 'get'
    }).then((res) => res.json())

    return data
}

export default async function RecentGame() {
    const data = await fetchData() as GameData

    const getTime = (time: number) => {
        const date = new Date(time*1000);
        return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
    }

    if (data) {
        return (
            <DataComponent
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