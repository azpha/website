import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head"
import Header from "@/components/header";

export default function Home() {
    return (
        <main className="min-h-screen bg-black color-white">
            <div className="w-1/2 mx-auto text-white">
                <Header />
                <p>test</p>
            </div>
        </main>
    )
} 