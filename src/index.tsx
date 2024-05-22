import SocialItem from "./components/SocialItem"
import { useState, useEffect } from "react"

export default function Home() {
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }, [copied])

    return (
        <div className="bg-black min-h-screen flex justify-center items-center text-white">
            <div className="inline-block">
                <div className="space-x-2 mx-auto my-2 text-center">
                    <SocialItem 
                        urlTo="https://nobro.alexav.gg"
                        title="NoBro" 
                    />
                    <SocialItem 
                        urlTo="https://blog.alexav.gg"
                        title="Blog" 
                    />
                    <SocialItem 
                        urlTo="#"
                        title="Radio" 
                    />
                </div>
                <div className="crayon border">
                    <h1 className="text-2xl font-bold text-center">Alex</h1>
                </div>
                <div className="space-x-2 mx-auto my-2 text-center">
                    <SocialItem 
                        urlTo="https://twitter.com/avvex__"
                        title="Twitter" 
                    />
                    <SocialItem 
                        urlTo="https://mast.thatalex.dev"
                        title="Mastodon" 
                    />
                    <SocialItem 
                        urlTo="https://medal.tv/u/alexav"
                        title="Medal"
                    />
                </div>
            </div>

            <div className="bottom-0 absolute my-6 text-zinc-700 font-bold">
                {/* <button type="button" onClick={() => setCopied(true)} className="hover:underline">
                    {
                        copied ? "Copied!"
                        : "alex@alexav.gg"
                    }
                </button> */}

                {
                    copied ? (
                        <button type="button" className="underline">
                            Copied!
                        </button>
                    ) : (
                        <button type="button" onClick={() => setCopied(true)} className="hover:underline">
                            alex@alexav.gg
                        </button>
                    )
                }

            </div>
        </div>
    )
}