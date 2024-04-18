// component imports
import Head from "./Head"

// react imports
import React from 'react';

type LayoutProps = {
    children: React.ReactNode
    protectedPage?: boolean
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <main className="bg-black h-screen flex flex-col justify-center items-center overflow-y-hidden">
            <Head />
            <div className="flicker">
                {children}
            </div>
        </main>
    )
}