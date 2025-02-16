import DataComponent from '../DataComponent';
import type { ContentTrackerItem } from '@/utils/types';

const fetchData = async () => {
    const { data } = await fetch("https://api.alexav.gg/v4/tracker/latest/book", {
        method: 'get',
        next: { revalidate: 60 }
    }).then((res) => res.json())
    return data
}

export default async function RecentBook() {
    const data = await fetchData() as ContentTrackerItem

    const getDateString = (startedOn: Date, finished: boolean) => {
        if (startedOn && !finished) {
            const startedOnDate = new Date(startedOn);
            return "Started on " + startedOnDate.toLocaleDateString();
        } else if (finished) {
            return "Finished!"
        } else {
            return "Just Added"
        }
    }

    if (data) {
        return (
            <DataComponent
                header={"What I'm reading"}
                projectHeader={data.title}
                projectSubheader={getDateString(data.startedOn, data.finished)}
                url={"https://tracker.alexav.gg/?type=book&id=" + data.id}
                projectImage={data.image}
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