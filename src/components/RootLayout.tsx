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
                    <Head />
                    <p>Loading...</p>
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
                    <Head />
                    <Header />
                    {children}
                    <Footer />
                </main>
            )
        }
    } else {
        return (
            <main className="min-h-screen bg-black">
                <Head />
                <Header />
                {children}
                <Footer />
            </main>
        )
    }
}