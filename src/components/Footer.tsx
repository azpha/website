import { useState, useEffect } from 'react';
import {
    Twitter,
    Github,
    Lastfm
} from 'grommet-icons'

export default function Footer() {
    const [mailState, setMailState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMailState(false)
        }, 3000)
    }, [mailState])

    return (
        <div className="bg-zinc-600 text-center text-white absolute bottom-0 left-0 right-0 p-4 select-none">
            <h1 className="font-bold">&copy; {new Date().getFullYear()}, Alex Frantz. All Rights Reserved</h1>

            {
                mailState ? (
                    <p className="font-bold hover:underline max-w-fit mx-auto">
                        Copied!
                    </p>
                ) : (
                    <button onClick={() => setMailState(true)} className="hover:underline">alex@alexav.gg</button>
                )
            }

            <div className="block space-x-2">
                {/* socials */}
                <a href="https://twitter.com/avvex__" target="_blank">
                    <Twitter color="black" size="medium" />
                </a>
                <a href="https://github.com/azpha" target="_blank">
                    <Github color="black" size="medium" />
                </a>
                <a href="https://last.fm/user/lulawex" target="_blank">
                    <Lastfm color="black" size="medium" />
                </a>
            </div>
        </div>
    )
}