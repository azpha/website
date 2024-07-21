import { useState, useEffect } from 'react';

type PhotoDataResponse = {
    result: {
        data: {
            json: PhotoData[]
        }
    }
};
type PhotoData = {
    id: number,
    name: string,
    imageUrl: string,
    dateTaken: Date
}

export default function RecentPhoto() {
    const [ data, setData ] = useState<PhotoData[] | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ errorState, setErrorState ] = useState<string | null>(null);

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        fetch("https://photos-cors.alexav.gg", {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(async (res) => {    
            if (res.ok) {
                console.log("ok!")
                console.log(errorState)
                const json = await res.json() as PhotoDataResponse[];
                setData(json[0].result.data.json);
                setLoading(false)
            } else {
                console.log("not ok :(")
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
        <a href={"https://photos.alexav.gg/"} target="_blank">
            <div className="bg-white text-black p-4">
                {
                    (loading) ? (
                        <h1>Loading..</h1>
                    ) : (!errorState && data) ? (
                        <div className="flex items-center">
                            <img 
                                src={data[0].imageUrl}
                                width="200"
                            />
                            <div className="flex flex-wrap mx-2">
                                <h1 className="w-full font-bold">{data[0].name}</h1>

                                <h1>{parseDate(data[0].dateTaken as Date)}</h1>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className="font-bold text-2xl">Failed to fetch :(</h1>
                            <p>Check out <a className="underline" href="https://photos.alexav.gg" target="_blank">photos.alexav.gg</a> if this isn't working.</p>
                            <p className="text-sm italic">{errorState}</p>
                        </>
                    )
                }
            </div>
        </a>
    )

}