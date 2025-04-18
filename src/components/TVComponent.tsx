import { useState, useEffect } from 'react';

type TVObject = {
    id: number,
    type: string,
    title: string,
    author: string | null,
    description: string,
    image: string,
    episode: string,
    tmdbId: string,
    finished: boolean,
    yearReleased: string,
    genre: string,
    startedOn: string
}

export default function TVComponent() {
    const [ show, setShow ] = useState<TVObject | null>(null);
    const [ failedFetch, setFailedFetch ] = useState(false);

    useEffect(() => {
        async function fetchMusic() {
            const response = await fetch("https://api.alexav.gg/v4/tracker/latest/tv")
            if (response.ok) {
                const data = await response.json()
                setShow(data.data as TVObject)
            } else setFailedFetch(true)
        }

        setTimeout(() => {
            fetchMusic()
        }, 60000)
        fetchMusic()
    }, [])

    if (show) {
        return (
            <div className="flex align-middle">
                <a className="hover:underline" href={`https://tracker.alexav.gg/?id=${show.id}&type=${show.type}`} target="_blank">
                    <h1 className="lowercase">{show.title} - {show.finished ? "finished" : show.episode}</h1>
                </a>
            </div>
        )
    } else {
        if (failedFetch) {
            return (
                <div>
                    <p>failed to get show :(</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>loading show..</p>
                </div>
            )
        }
    }
}