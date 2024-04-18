import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import { api } from "@/utils/api";

// types
import type {
    MedalApiObject,
    SteamApiObject,
    MusicApiObject
} from '@/utils/types'

type SocialCardProps = {
    platform: "steam" | "music" | "medal"
}

function MedalSocialCard() {
    const { data: medalData, medalFetchStatus } = api.social.getMedalData.useQuery();

    return (
        <>
            {
                medalData?.data.map((v: MedalApiObject,k: number) => {
                    return <div key={k}>
                        <Image 
                            src={v.image[0]?.["#text"] ?? "https://storage.thatalex.dev/content/pfp.jpg"}
                            width="50"
                            height="50"
                            alt={`${v.name} Cover Art`}
                            className="inline mr-2"
                        />
                        <div className="inline-block align-middle">
                            <Link href={v.url} target="_blank">
                                <h1 className="font-bold w-52 truncate hover:underline">{v.name}</h1>
                            </Link>
                            <p className="opacity-75">{v.artist["#text"]}</p>
                        </div>
                    </div>
                })
            }
        </>
    )
}

function SteamSocialCard() {
    const { data: SteamData, steamFetchStatus } = api.social.getSteamData.useQuery();
}

function MusicSocialCard() {
    const { data: MusicData, musicFetchStatus } = api.social.getMusicData.useQuery();
    return 
}

export default function SocialCard({ platform }: SocialCardProps) {
    const [content, setContent] = useState<React.JSX.Element | null>(null)


    const platformDisplayElements = () => {
        if (platform === "music") {
            return (
                <div className="space-y-2">
                {
                    socialData?.data.map((v,k) => {
                        return <div key={k}>
                            <Image 
                                src={v.image[0]?.["#text"] ?? "https://storage.thatalex.dev/content/pfp.jpg"}
                                width="50"
                                height="50"
                                alt={`${v.name} Cover Art`}
                                className="inline mr-2"
                            />
                            <div className="inline-block align-middle">
                                <Link href={v.url} target="_blank">
                                    <h1 className="font-bold w-52 truncate hover:underline">{v.name}</h1>
                                </Link>
                                <p className="opacity-75">{v.artist["#text"]}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            )
        }
    }

    // return (
    //     <div className="bg-white text-black max-w-fit mx-auto p-4">
    //         <h1 className="text-2xl font-bold inline">{displayPlatform}</h1>
    //     </div> 
    //     // <div className="bg-white text-black max-w-fit mx-auto p-4">
    //     //     <h1 className="text-2xl font-bold inline">Listening To</h1>

    //     //     {/* link to lastfm */}
    //     //     <Link 
    //     //         href="https://last.fm/user/lulawex"
    //     //         target="_blank"
    //     //         className="opacity-75 underline font-bold text-sm ml-2 hover:text-zinc-600"
    //     //     >
    //     //         Powered by Last.fm
    //     //     </Link>
    //     // </div>
    // )
}