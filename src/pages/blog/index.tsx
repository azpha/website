import RootLayout from "@/components/RootLayout"
import BlogCard from "@/components/BlogCard"
import NotFound from "@/components/NotFound";
import React, {useState, useEffect} from 'react';
import { api } from "@/utils/api";

type GenericItemType = {
    name: string,
    image: string,
    tagline: string,
    id: number
}

export default function Blog() {
    const {data: itemData, isLoading: areItemsLoading} = api.blog.getAll.useQuery()
    const [list, setList] = useState<null | JSX.Element[]>(null)

    useEffect(() => {
        if (itemData) {
            setList(
                itemData.map((v: GenericItemType, k) => {
                    return <BlogCard 
                        name={v.name}
                        tagline={v.tagline}
                        id={v.id}
                        image={v.image}
                        key={k}
                    />
                })
            )
        }
    }, [itemData])

    if (list) {
        return (
            <RootLayout>
                <div className="text-white w-1/2 mx-auto">
                    <div className="space-x-2 space-y-2">
                        {
                            list.length > 0 ? list : <NotFound />
                        }
                    </div>
                </div>
            </RootLayout>
        )
    } else if (areItemsLoading) {
        <RootLayout>
            <div className="text-white">
                <p>Loading..</p>
            </div>
        </RootLayout>
    } else {
        return (
            <RootLayout>
                <NotFound />
            </RootLayout>
        )
    }
}