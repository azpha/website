import { useState, useEffect } from 'react';
import ProjectComponent from '../ProjectComponent';

type PhotoData = {
    id: number,
    name: string,
    imageUrl: string,
    dateTaken: Date
}

export default function RecentPhoto() {
    const [ data, setData ] = useState<PhotoData | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ errorState, setErrorState ] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.alexav.gg/v4/social/photos", {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(async (res) => {    
            if (res.ok) {
                const json = await res.json()
                setData(json.data[0]);
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

    if (data && !loading) {
        return (
            <ProjectComponent 
                url={"https://photos.alexav.gg?id=" + data.id}
                header={"Photos I've captured"}
                projectHeader={data.name}
                projectSubheader={`Taken on ${new Date(data.dateTaken).toLocaleDateString()}`}
                projectImage={data.imageUrl}
            />
        )
    } else {
        return (
            <ProjectComponent 
                header={"Photos I've captured"}
                projectHeader={"No data :("}
                projectSubheader={loading ? "Loading data.." : "Something went wrong fetching data! " + errorState}
                url={"/"}
            />
        )
    }

}