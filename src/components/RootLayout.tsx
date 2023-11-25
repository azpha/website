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
    const snowflakeElements = []

    for (let i = 0; i < 50; i++) {
        snowflakeElements.push(
            <div
                className="snowflake text-white"
                style={
                    {
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() *5 + 5}s`,
                        fontSize: `${Math.random() * 1.5 + 0.5}em`
                    }
                }
            >
            ❅
            </div>
        )
      }

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
                    {snowflakeElements}
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
                {snowflakeElements}
                <Header />
                {children}
                <Footer />
            </main>
        )
    }
}