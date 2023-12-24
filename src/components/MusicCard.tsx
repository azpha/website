import Image from "next/image";
import Link from "next/link";
import { api } from "@/utils/api";

export default function MusicCard() {
    const musicFetch = api.misc.song.useQuery()

    if (musicFetch.data) {
        return (
            <Link href="https://last.fm/user/lulawex" target="_blank">
                <div className="bg-white max-w-xs text-black rounded-sm leading-tight">
                    <div className="flex items-start p-2">
                        <div className="flex-none">
                            <Image 
                                src={musicFetch.data.track.image[3]?.["#text"] ?? ""}
                                alt="Cover Art" 
                                width="50"
                                height="50"
                            />
                        </div>
                        <div className="flex flex-col ml-2 pt-1.5">
                            <h1 className="text-sm truncate">{musicFetch.data.track.name}</h1>
                            <p>{musicFetch.data.track.artist["#text"]}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}