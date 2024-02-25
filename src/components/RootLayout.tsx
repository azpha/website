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
        }

        if (status === "unauthenticated") {
            Router.replace("/").catch(() => {
                console.error("Failed to reroute user!")
            })
        } else {
            return (
                <main className="min-h-screen bg-black">
                    <div className="w-1/2 mx-auto">
                        <Head />
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </main>
            )
        }
    } else {
        return (
            <main className="min-h-screen bg-black">
                <div className="w-1/2 mx-auto">
                    <Head />
                    <Header />
                    {children}
                </div>
                <Footer />
            </main>
        )
    }
}