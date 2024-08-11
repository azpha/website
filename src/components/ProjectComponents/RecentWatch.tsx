import { useState, useEffect } from 'react';

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

    return (
        <a href={data?.id ? "https://watch.alexav.gg/?id=" + data?.id : "#"} target="_blank">
            <div className="bg-white text-black p-4 max-w-fit lg:max-w-full mx-auto">
                {
                    loading ? (
                        <h1>Loading..</h1>
                    ) : !errorState ? (
                        <div className="flex items-center">
                            <img 
                                src={data?.imageKey}
                                width="50"
                            />
                            <div className="flex flex-wrap mx-2">
                                <h1 className="w-full font-bold">{data?.title}</h1>
                                
                                {
                                    data?.finished ? (
                                        <h1 className="w-full font-bold">Finished!</h1>
                                    ) : (
                                        <h1 className="w-full">Started on {parseDate(new Date(data?.startedOn as Date))}</h1>
                                    )
                                }

                                <h1>{data?.currentEpisode}</h1>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className="font-bold text-2xl">Failed to fetch :(</h1>
                            <p>Check out <a className="underline" href="https://watch.alexav.gg" target="_blank">watch.alexav.gg</a> if this isn't working.</p>
                            <p className="text-sm italic">{errorState}</p>
                        </>
                    )
                }
            </div>
        </a>
    )

}