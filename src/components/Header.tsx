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

async function getQuote() {
    return quoteArray[Math.floor(Math.random() * quoteArray.length)]
}

export default async function Header() {
    const quote = await getQuote()

    return (
        <div className="bg-zinc-900 p-4 flex justify-between">
            <div>
                <a href="/" className="hover:underline">
                    <h1 className="text-2xl font-bold">Alex Frantz</h1>
                </a>
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

// "use client";

// import { useState, useEffect, useCallback } from "react"

// export default function Header() {
//     const [ shouldShowAudio, setShouldShowAudio ] = useState<boolean>(false)
//     const [ pressedKeys, setPressedKeys ] = useState<string[]>([])
//     const keyCombination = [
//         "ArrowUp",
//         "ArrowUp",
//         "ArrowDown",
//         "ArrowDown",
//         "ArrowLeft",
//         "ArrowRight",
//         "ArrowLeft",
//         "ArrowRight",
//         "b",
//         "a",
//         "Enter"
//     ]
//     const isArraysEqual = (arr1: string[], arr2: string[]) => {
//         return arr1.length === arr2.length &&
//             arr1.every((val, ind) => val === arr2[ind]); 
//     }
//     const onKeyDown = useCallback((e: KeyboardEvent) => {
//         const currentlyPressedKeys = pressedKeys;
//         currentlyPressedKeys.push(e.key) 

//         if (!isArraysEqual(keyCombination, currentlyPressedKeys) && keyCombination.filter((v) => v === e.key) && !e.repeat) {
//             setPressedKeys(() => {
//                 return currentlyPressedKeys
//             })
//         } else {
//             document.removeEventListener('keydown', onKeyDown)
//             setShouldShowAudio(true)
//             console.log('heeey-ey-ey-ey')
//         }
//     }, [])
//     useEffect(() => {
//         document.addEventListener('keydown', onKeyDown);
//     })

    // const quoteArray = [
    //     "It works on my machine",
    //     "Revert 'Revert 'Revert",
    //     "'fuck the tests'",
    //     "this is so cooked",
    //     "Professional Production Tester",
    //     "I break hearts to save lives.",
    //     "go bills",
    //     "josh allen is my goat",
    //     "lets go buffalo",
    //     "oorah",
    //     "how bout them bills??",
    //     "where else would you rather be..",
    //     "..than right here, right now?!"
    // ]
//     const [ quote, setQuote ] = useState<string>(quoteArray[0]);

//     useEffect(() => {
//         setQuote(quoteArray[Math.floor(Math.random() * quoteArray.length)])
//     }, [])
//     const drawNewQuote = () => {
//         const newQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)]

//         // redraw if this quote == current quote
//         if (newQuote !== quote) {
//             setQuote(newQuote);
//         } else drawNewQuote();
//     }

//     return (
        // <div className="bg-zinc-900 p-4 flex justify-between">
        //     { shouldShowAudio && <audio onEnded={() => setShouldShowAudio(false)} autoPlay={true} src={"https://storage.alexav.gg/content/0f4ce103-62d0-4ff1-8b8b-e38becced35d.mp3"} />}
        //     <div>
        //         <a href="/" className="hover:underline">
        //             <h1 className="text-2xl font-bold">Alex Frantz</h1>
        //         </a>
        //         <p className="opacity-50 italic select-none" onClick={drawNewQuote}>{quote}</p>
        //     </div>
        //     <div className="space-x-2 items-center justify-center flex select-none">
        //         <a className="hover:underline" href="#projects">Projects</a>
        //         <a className="hover:underline" href="#data">Data</a>
        //         <a className="hover:underline" href="#contact">Contact</a>
        //     </div>
        // </div>
//     )
// }