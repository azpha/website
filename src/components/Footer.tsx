import { useState, useEffect } from 'react';
import { GitHub, LastFM, Twitter, Medal } from './SocialIcons';

export default function Footer() {
    const [mailState, setMailState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMailState(false)
        }, 3000)
    }, [mailState])

    return (
        <div className="bg-gray-500 lg:w-1/2 md:w-full mx-auto rounded-lg text-center text-white bottom-0 left-0 right-0 p-4 select-none">
            <h1 className="font-bold">&copy; {new Date().getFullYear()}, Alex Frantz. All Rights Reserved</h1>
            <p>All logos & images on this page belong to their respective owners.</p>

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
                <a href="https://github.com/azpha" target="_blank">
                    <GitHub />
                </a>
                <a href="https://twitter.com/avvex__" target="_blank">
                    <Twitter />
                </a>
                <a href="https://last.fm/user/lulawex" target="_blank">
                    <LastFM />
                </a>
                <a href="https://medal.tv/users/215577" target="_blank">
                    <Medal />
                </a>
            </div>
        </div>
    )
}