import RootLayout from "@/components/RootLayout"
import ReviewCard from "@/components/ReviewCard"
import React, {useState, useEffect} from 'react';
import { api } from "@/utils/api";

type GenericItemType = {
    name: string,
    image: string
}

export default function Reviews() {
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

            if (filteredArray.length <= 0) {
                setList(null)
            } else {
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
        }
    }, [itemData, type])

    return (
        <RootLayout>
            <div className="w-1/2 mx-auto text-white">
                <p className="text-center font-bold text-2xl hover:cursor-pointer hover:underline pb-2 select-none" onClick={onCatClick}>
                    {type}
                </p>

                <div className="flex flex-wrap justify-center">
                    {
                        list ? list
                        : <div className="text-center">
                            <h1>Nothing here!</h1>
                            <p>Try again later :(</p>
                        </div>
                    }
                </div>
            </div>
        </RootLayout>
    )
}