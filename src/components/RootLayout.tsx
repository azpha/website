// component imports
import Header from "./header";
import Footer from "./footer";
import Head from "./Head"

// react imports
import React from 'react';

// next modules
import { useSession } from "next-auth/react";
import Router from 'next/router';

type LayoutProps = {
    children: React.ReactNode
    protectedPage?: boolean
}

export default function RootLayout({ children, protectedPage }: LayoutProps) {
    const {status} = useSession()

    if (protectedPage) {
        if (status === "loading") {
            return (
                <main className="min-h-screen bg-black">
                    <div className="w-1/2 mx-auto">
                        <Head />
                        <p>Loading...</p>
                    </div>
                </main>
            )
        } else if (status === "unauthenticated") {
            Router.replace("/").catch(() => {
                console.error("Failed to reroute user!")
            })
            return (
                <></>
            )
        }
    }

    return (
        <main className="min-h-screen bg-black">
            <div className="lg:w-1/2 sm:w-full mx-auto">
                <Head />
                <Header />
                {children}
            </div>
            <Footer />
        </main>
    )
}