import Header from "@/components/header"
import ReviewCard from "@/components/ReviewCard"
import {useSession} from 'next-auth/react';
import {useState, useEffect} from 'react';
import { api } from "@/utils/api";

type GenericItemType = {
    name: string,
    image: string
}

export default function Reviews() {
    const { data: sessionData, status } = useSession();
    const {data: itemData} = api.post.getAll.useQuery()
    const [list, setList] = useState<null | JSX.Element[]>(null)

    useEffect(() => {
        if (itemData) {
            setList(
                itemData?.map((v: GenericItemType) => {
                    return <ReviewCard title={v.name} url={`/reviews/${v.name}`} image={v.image} />
                })
            )
        }
    }, [itemData])

    return (
        <main className="min-h-screen bg-black color-white">
            <div className="w-1/2 mx-auto text-white">
                <Header />
                {
                    status == "authenticated" ?
                    <p className="text-center font-bold">
                        <a href="/reviews/create">
                            Create
                        </a>
                    </p>
                    :
                    ""
                }  
                <div className="flex flex-wrap justify-center">
                    {list}
                </div>
            </div>
        </main>
    )
}