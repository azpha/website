import DataComponent from '../DataComponent';
import type { WatchData } from '@/utils/types';

const fetchData = async () => {
    const data = await fetch("https://api.alexav.gg/v4/tracker/latest/tv", {
        method: 'get',
        next: { revalidate: 60 }
    });
    return await data.json()
}

export default async function RecentWatch() {
    const data = await fetchData() as WatchData

    const getSubheaderText = () => {
        if (data?.data.finished) {
            return "Finished!"
        } else if (data?.data.startedOn) {
            return "Last update on " + new Date(data.data.updatedAt).toLocaleDateString()
        } else {
            return "Just Added"
        }
    }

    if (data) {
        return (
            <DataComponent
                header={"What I'm watching"}
                projectHeader={data.data.title}
                projectSubheader={ getSubheaderText() }
                url={"https://tracker.alexav.gg/?type=tv&id=" + data.data.id}
                projectImage={data.data.image}
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