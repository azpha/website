import { useState, useEffect } from 'react';
import { GitHub, LastFM, Twitter, Medal } from './SocialIcons';

export default function Footer() {
    const [mailState, setMailState] = useState(false);

    useEffect(() => {
        if (mailState) {
            setTimeout(() => {
                setMailState(false)
            }, 3000)
        }
    }, [mailState])

    return (
        <div className="lg:w-1/2 bg-gray-500 md:w-full mx-auto rounded-t-lg text-center p-4 select-none">
            <h1 className="font-bold">&copy; {new Date().getFullYear()}, Alex Frantz. All Rights Reserved</h1>
            <p>All logos & images on this page belong to their respective owners.</p>

            {
                mailState ? (
                    <p className="font-bold hover:underline max-w-fit mx-auto">
                        Copied!
                    </p>
                ) : (
                    <button onClick={() => {
                        setMailState(true)
                        navigator.clipboard.writeText("alex@alexav.gg")
                    }} className="hover:underline">alex@alexav.gg</button>
                )
            }

            <div className="block space-x-2">
                {/* socials */}
                <a href="https://github.com/azpha/website" target="_blank">
                    <GitHub />
                </a>
                <a href="https://twitter.com/carlgrimesdupe" target="_blank">
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