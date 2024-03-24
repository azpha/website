import Image from "next/image";
import Link from "next/link";
import { api } from "@/utils/api";

export default function MusicCard() {
    const {data: musicData, fetchStatus} = api.misc.song.useQuery()

    return (
        <div className="bg-white text-black max-w-fit mx-auto p-4">
            <h1 className="text-2xl font-bold inline">Listening To</h1>

            {/* link to lastfm */}
            <Link 
                href="https://last.fm/user/lulawex"
                target="_blank"
                className="opacity-75 underline font-bold text-sm ml-2 hover:text-zinc-600"
            >
                Powered by Last.fm
            </Link>

            {
                fetchStatus !== "fetching" ?
                    <div className="space-y-2">
                        {
                            musicData?.track.map((v,k) => {
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
                :
                    <p className="font-bold">Hold tight, fetching..</p>
            }
        </div>
    )
}