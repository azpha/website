import RootLayout from "@/components/RootLayout";
import { api } from "@/utils/api";

// next components
import Link from 'next/link';
import Image from "next/image";

export default function MusicPage() {
    const { data: musicData, fetchStatus} = api.misc.song.useQuery();

    return (
        <RootLayout showHeader={true} isHomePage={false}>
            <div className="text-green-500 flicker max-w-1/2">
                <div className="float-left mr-10">
                    {
                        fetchStatus === "idle" ?
                            musicData?.data.tracks.map((v,k) => {
                                return <div key={k}>
                                    <div className={`text-lg ${k === 0 ? "bg-green-500 text-black" : "hover:bg-green-500 hover:text-black"}`}>
                                        <Link href={v.url} target="_blank">
                                            <h1 className="ml-2 mr-10 truncate max-w-10">{k === 0 && "■"} {v.name}</h1>
                                        </Link>
                                    </div>
                                </div>
                            })
                        : <h1 className="font-bold text-green-500">Fetching..</h1>
                    }
                    <Link
                        href="https://last.fm/user/lulawex"
                        target="_blank"
                        className="hover:underline"
                    >
                        <p>Powered by Last.fm</p>
                    </Link>
                </div>
                <div className="float-right">
                    {
                        fetchStatus === "idle" &&
                            <Image 
                                src={musicData?.data.tracks[0]?.image[2]?.["#text"] ?? "https://storage.thatalex.dev"}
                                alt="Cover Art"
                                width="160"
                                height="160"
                            />
                    }
                </div>
            </div>
        </RootLayout>
    )
}