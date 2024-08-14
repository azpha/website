import { useState, useEffect } from 'react';
import { GitHub, LastFM, Twitter, Medal, Link } from './SocialIcons';

export default function Footer() {
    const quoteArray = [
        "It works on my machine",
        "Revert 'Revert 'Revert 'Revert Change'''",
        "releases on Friday. refuses to elaborate. leaves.",
        "this is so cooked",
        "TypeScript: errors not for the weak, but for the spirited",
        "Professional Production Tester",
        "I break hearts to save lives. err.. something like that",
        "The best error is the one that never shows up"
    ]

    // states
    const [mailState, setMailState] = useState<boolean>(false);
    const [ quote, setQuote ] = useState<string>(quoteArray[Math.floor(Math.random() * quoteArray.length)]);

    useEffect(() => {
        if (mailState) {
            setTimeout(() => {
                setMailState(false)
            }, 3000)
        }
    }, [mailState])

    const drawNewQuote = () => {
        setQuote(quoteArray[Math.floor(Math.random() * quoteArray.length)]);
    }

    return (
        <div className="lg:w-1/2 bg-gray-500 md:w-full mx-auto rounded-t-lg text-center p-4 select-none">
            <h1 className="font-bold">&copy; {new Date().getFullYear()}, Alex Frantz. All Rights Reserved</h1>
            <p>All logos & images on this page belong to their respective owners.</p>
            <p className="opacity-50 italic" onClick={drawNewQuote}>{quote}</p>

            <hr className="my-2 w-1/2 mx-auto" />

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
                <a href="https://links.alexav.gg" target="_blank">
                    <Link />
                </a>
            </div>
        </div>
    )
}