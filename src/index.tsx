import {
    Twitter,
    BlockQuote,
    Desktop
} from 'grommet-icons'

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col bg-black min-h-screen text-white">
            <div className="inline-block space-x-2 text-center my-2">
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    <a href="https://watch.alexav.gg" target="_blank">
                        Watchlist
                    </a>
                </p>
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    <a href="https://nobro.alexav.gg" target="_blank">
                        NoBro
                    </a>
                </p>
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    Blog
                </p>
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    Radio
                </p>
            </div>

            <div className="max-w-fit">
                <h1 className="text-5xl font-bold">Alex's<br />Website</h1>
            </div>

            <div className="inline-block space-x-2 text-center my-2">
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    <a href="https://twitter.com/avvex__" target="_blank">
                        <Twitter size="small" /> Twitter
                    </a>
                </p>
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    <a href="https://mast.thatalex.dev" target="_blank">
                        <BlockQuote size="small" /> Mastodon
                    </a>
                </p>
                <p className="inline hover:cursor-pointer hover:underline hover:text-gray-300">
                    <a href="https://medal.tv/u/alexav" target="_blank">
                        <Desktop size="small" /> Medal
                    </a>
                </p>
            </div>
        </div>
    )
}