import { useState, useEffect } from "react"

export default function Header({
    isAudioActive = false
}: {
    isAudioActive: boolean
}) {
    const quoteArray = [
        "It works on my machine",
        "Revert 'Revert 'Revert",
        "'fuck the tests'",
        "this is so cooked",
        "Professional Production Tester",
        "I break hearts to save lives.",
        "go bills",
        "josh allen is my goat",
        "lets go buffalo",
        "oorah",
        "how bout them bills??",
        "where else would you rather be..",
        "..than right here, right now?!"
    ]
    const [ quote, setQuote ] = useState<string>(quoteArray[Math.floor(Math.random() * quoteArray.length)]);

    const drawNewQuote = () => {
        const newQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)]

        // redraw if this quote == current quote
        if (newQuote !== quote) {
            setQuote(newQuote);
        } else drawNewQuote();
    }
    useEffect(() => {
        if (isAudioActive) {
            setQuote("go bills")
        }
    }, [isAudioActive])

    return (
        <div className="bg-zinc-900 p-4 flex justify-between">
            <div>
                <a href="/" className="hover:underline">
                    <h1 className="text-2xl font-bold">Alex Frantz</h1>
                </a>
                <p className="opacity-50 italic select-none" onClick={drawNewQuote}>{quote}</p>
            </div>
            <div className="space-x-2 items-center justify-center flex select-none">
                <a className="hover:underline" href="#projects">Projects</a>
                <a className="hover:underline" href="#data">Data</a>
                <a className="hover:underline" href="#contact">Contact</a>
            </div>
        </div>
    )
}