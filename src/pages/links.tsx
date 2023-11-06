import Header from "@/components/header";
import Footer from "@/components/footer";
import SocialCard from '@/components/SocialCard'
import Dropdown from "@/components/Dropdown";
import { api } from "@/utils/api";
import React, {useEffect, useState} from 'react';

export default function Links() {
    const {data: linkData} = api.links.getAll.useQuery()
    const [formatted, setFormatted] = useState<React.JSX.Element[] | null>(null)

    useEffect(() => {
        if (linkData) {
            setFormatted(
                linkData.map((v) => {
                    return <SocialCard url={v.url} name={v.name} key={v.name} />
                })
            )
        }
    }, [linkData])

    return (
        <main className="min-h-screen bg-black">
            <div className="w-1/2 mx-auto text-white">
                <Header />

                {formatted}
                
                {/* {
                    formatted ?
                    <Dropdown content={formatted} name="Social Dropdown" />
                    :
                    <h1>There&apos;s nothing here :(</h1>
                } */}

                <Footer />
            </div>
        </main>
    )
}