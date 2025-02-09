"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
    // states
    const [ mailState, setMailState ] = useState<boolean>(false);

    useEffect(() => {
        if (mailState) {
            setTimeout(() => {
                setMailState(false)
            }, 3000)
        }
    }, [mailState])

    return (
        <div className="lg:w-1/2 md:w-full mx-auto rounded-t-lg text-center p-4 select-none">
            <h1 className="font-bold text-sm">&copy; {new Date().getFullYear()}, Alex Frantz. All Rights Reserved</h1>
            <p>All logos & images on this page belong to their respective owners.</p>

            <hr className="my-2 w-1/2 mx-auto" />

            {
                mailState ? (
                    <p className="font-bold hover:underline max-w-fit mx-auto">
                        Copied!
                    </p>
                ) : (
                    <button onClick={() => {
                        setMailState(true)
                        navigator.clipboard.writeText("alex@vierfrantz.com")
                    }} className="hover:underline">alex@vierfrantz.com</button>
                )
            }
        </div>
    )
}