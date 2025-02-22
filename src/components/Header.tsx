"use client"
import { useState, useEffect } from 'react';
import Link from "next/link"

export default function Header() {
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
    const [ quote, setQuote ] = useState<string>(quoteArray[0])

    useEffect(() => {
        setQuote(quoteArray[Math.floor(Math.random() * quoteArray.length)]);
    }, [])

    return (
        <div className="bg-zinc-900 p-4 flex justify-between">
            <div>
                <Link href="/" className="hover:underline">
                    <h1 className="text-2xl font-bold">Alex Frantz</h1>
                </Link>
                <p onClick={() => {
                    setQuote(quoteArray[Math.floor(Math.random() * quoteArray.length)])
                }} className="opacity-50 italic select-none">{quote}</p>
            </div>
            <div className="space-x-2 items-center justify-center flex select-none">
                <a className="hover:underline" href="#projects">Projects</a>
                <a className="hover:underline" href="#data">Data</a>
                <a className="hover:underline" href="#contact">Contact</a>
            </div>
        </div>
    )
}