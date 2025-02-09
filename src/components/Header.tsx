import Link from "next/link"

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

async function getQuote(index: number) {
    return quoteArray[index]
}

export default async function Header() {
    const quote = await getQuote(Math.floor(Math.random() * quoteArray.length))

    return (
        <div className="bg-zinc-900 p-4 flex justify-between">
            <div>
                <Link href="/" className="hover:underline">
                    <h1 className="text-2xl font-bold">Alex Frantz</h1>
                </Link>
                <p className="opacity-50 italic select-none">{quote}</p>
            </div>
            <div className="space-x-2 items-center justify-center flex select-none">
                <a className="hover:underline" href="#projects">Projects</a>
                <a className="hover:underline" href="#data">Data</a>
                <a className="hover:underline" href="#contact">Contact</a>
            </div>
        </div>
    )
}