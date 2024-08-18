import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type SteamAPIResponse = {
    data: GameItem[]
}
type GameItem = {
    appid: number,
    name: string,
    playtime_forever: number,
    img_icon_url: string,
}

export default function RecentGame() {
    const [ data, setData ] = useState<GameItem[]>();
    const [ errorState, setErrorState ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(true);

    const translateToAppStorePage = (appId: number) => {
        return "https://store.steampowered.com/app/" + appId
    }
    const buildMediaUrl = (appId: number, hash: string) => {
        return "https://media.steampowered.com/steamcommunity/public/images/apps/" + appId + "/" + hash + ".jpg"
    }

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/steam", {
            method: "get"
        })
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json() as SteamAPIResponse
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
                url={translateToAppStorePage(data[0].appid)}
                header={"Games I'm playing"}
                projectHeader={data[0].name}
                projectSubheader={`${data[0].playtime_forever / 60}h played`}
                projectImage={buildMediaUrl(data[0].appid, data[0].img_icon_url)}
                projectImageSize={"40"}
            />
        )
    } else {
       <>
        <h1 className="font-bold text-2xl">No data :(</h1>
        <p>Check out <a className="underline" href="https://steamcommunity.com/id/luvxavierr" target="_blank">steamcommunity.com/id/luvxavierr</a> if this isn't working.</p>
        <p className="text-sm italic">{errorState}</p>
       </> 
    }
}