// component imports
import Head from "./Head"
import Header from "./header";
import Footer from "./footer";

// react imports
import React from 'react';

type LayoutProps = {
    children: React.ReactNode
    protectedPage?: boolean,
    showHeader: boolean,
    isHomePage: boolean
}

export default function RootLayout({ 
    children,
    showHeader = true,
    isHomePage = true
}: LayoutProps) {
    return (
        <main className="bg-black h-screen flex flex-col justify-center items-center overflow-y-hidden">
            { showHeader && <Header isHomePage={isHomePage} />}

            <Head />
            <div className="flicker">
                {children}
            </div>

            { showHeader && <Footer /> } 
        </main>
    )
}