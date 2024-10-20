import { useEffect, useState } from 'react';
import type { MusicAPIResponse, MusicData } from '../utils/types';

export default function MusicWidget() {
    const [ data, setData ] = useState<MusicData | null>(null);

    const fetchMusicData = () => {
        fetch("https://api.alexav.gg/v4/social/music", {
            method: 'get'
        })   
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json() as MusicAPIResponse;
                setData(data.data.tracks[0]);
            } else {
                console.error("Failed to get music data!", res.status);
            }
        })
    }

    useEffect(() => {
        fetchMusicData()
        setInterval(() => {
            fetchMusicData();
        }, 60000)
    }, [])

    if (data) {
        return (
            <div className="bg-black rounded-lg p-2 w-fit text-white">
                <div className="mx-auto text-center">
                    <img className="mx-auto mb-2" width="70" src={data.image.filter((v) => v.size === "large")[0]['#text']} />
                    <h1>{data.name}</h1>
                    <p>{data.artist['#text']}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading..</p>
            </div>
        )
    }
}