import Header from "@/components/header"
import Footer from "@/components/footer";
import ReviewCard from "@/components/ReviewCard"
import {useSession} from 'next-auth/react';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import { api } from "@/utils/api";

type GenericItemType = {
    name: string,
    image: string
}

export default function Reviews() {
    const { data: sessionData, status } = useSession();
    const {data: itemData} = api.post.getAll.useQuery()
    const [list, setList] = useState<null | JSX.Element[]>(null)
    const [type, setType] = useState("Book")

    function onCatClick() {
        // probably gonna rework this eventually if needed
        switch(type) {
            case 'Book':
                setType("Movie")
                break;
            case 'Movie':
                setType("TV")
                break;
            case 'TV':
                setType("Game")
                break;
            case 'Game':
                setType("Book")
                break;
        }
    }

    function sanitizeTitleForLink(title: string) {
        return title.replaceAll(" ", "-").toLowerCase()
    }

    useEffect(() => {
        if (itemData) {
            const filteredArray = itemData.filter(v => v.type == type.toLowerCase())

            setList(
                filteredArray.map((v: GenericItemType, k) => {
                    return <ReviewCard 
                        key={k}
                        title={v.name}
                        url={`/reviews/${sanitizeTitleForLink(v.name)}`}
                        image={v.image}
                        showText={false}
                    />
                })
            )
        }
    }, [itemData, type])

    return (
        <main className="min-h-screen bg-black color-white">
            <Header />
            <div className="w-1/2 mx-auto text-white">
                {
                    status == "authenticated" ?
                    <p className="text-center font-bold">
                        <Link href="/reviews/create">
                            Create
                        </Link>
                    </p>
                    :
                    ""
                }  

                <p className="text-center font-bold text-2xl hover:cursor-pointer hover:underline pb-2" onClick={onCatClick}>
                    {type}
                </p>

                <div className="flex flex-wrap justify-center">
                    {list}
                </div>
            </div>
            <Footer />
        </main>
    )
}