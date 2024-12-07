import Header from "./Header"
import Footer from "./Footer"
import Snow from "./Snow"
import React, { useState, useEffect, useCallback } from 'react';

export default function Layout({
    children
}: {
    children: JSX.Element | JSX.Element[]
}) {
    // teehee
    const [ shouldShowAudio, setShouldShowAudio ] = useState<boolean>(false)
    const [ pressedKeys, setPressedKeys ] = useState<string[]>([])
    const keyCombination = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
        "Enter"
    ]
    const isArraysEqual = (arr1: string[], arr2: string[]) => {
        return arr1.length === arr2.length &&
            arr1.every((val, ind) => val === arr2[ind]); 
    }
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        const currentlyPressedKeys = pressedKeys;
        currentlyPressedKeys.push(e.key) 

        if (!isArraysEqual(keyCombination, currentlyPressedKeys) && keyCombination.filter((v) => v === e.key) && !e.repeat) {
            setPressedKeys(() => {
                return currentlyPressedKeys
            })
        } else {
            document.removeEventListener('keydown', onKeyDown)
            setShouldShowAudio(true)
            console.log('heeey-ey-ey-ey')
        }
    }, [])
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
    })

    return (
        <main className="bg-black select-none text-white min-h-screen">
            <Header isAudioActive={shouldShowAudio} />
            <Snow />
            {children}
            <Footer />
            {shouldShowAudio && <audio onEnded={() => setShouldShowAudio(false)} autoPlay={true} src={"https://storage.alexav.gg/content/0f4ce103-62d0-4ff1-8b8b-e38becced35d.mp3"} />}
        </main>
    )
}