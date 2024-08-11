import { useState, useEffect } from 'react';

type MusicAPIResponse = {
    data: {
        tracks: MusicData[]
    }
}

type MusicData = {
    artist: {
        mbid: string,
        "#text": string
    },
    mbid: string,
    album: {
        mbid: string,
        "#text": string,
    },
    name: string,
    url: string,
    image: MusicImage[]
}

type MusicImage = {
    size: string,
    "#text": string
}

export default function RecentListens() {
    const [ data, setData ] = useState<MusicData[]>();
    const [ errorState, setErrorState ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/music", {
            method: "get"
        })
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json() as MusicAPIResponse
                setData(data.data.tracks);
            } else {
                setErrorState("Failed to load! :(")
            }
        })
        .catch((e: Error) => {
            setErrorState(e.message)
        })

        setLoading(false);
    }, []);

    if (data) {
        return (
            <a href={data[0].url} target="_blank">
                <div className="bg-white text-black p-4 max-w-fit lg:max-w-full mx-auto">
                    {
                        (loading) ? (
                            <h1>Loading..</h1>
                        ) : (!errorState && data) ? (
                            <div className="flex items-center">
                                <img 
                                    src={data[0].image.filter((v) => v.size === "large")[0]['#text']}
                                    width="100"
                                />
                                <div className="flex flex-wrap mx-2">
                                    <h1 className="w-full font-bold">{data[0].name}</h1>
    
                                    <h1>{data[0].artist['#text']}</h1>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1 className="font-bold text-2xl">Failed to fetch :(</h1>
                                <p>Check out <a className="underline" href="https://last.fm/user/lulawex" target="_blank">last.fm/lulawex</a> if this isn't working.</p>
                                <p className="text-sm italic">{errorState}</p>
                            </>
                        )
                    }
                </div>
            </a>
        )
    } else {
       <>
        <h1 className="font-bold text-2xl">No data :(</h1>
        <p>Check out <a className="underline" href="https://last.fm/user/lulawex" target="_blank">last.fm/lulawex</a> if this isn't working.</p>
        <p className="text-sm italic">{errorState}</p>
       </> 
    }
}