import {useSession, signIn, signOut} from 'next-auth/react';
import Head from 'next/head';
import HeaderItem from "./HeaderItem";

export default function Header() {
    const { data: session, status } = useSession()

    return (
        <>
            <div className="text-white w-52 pt-2 pb-4 mx-auto">
                <p className="text-2xl font-bold">alex</p>
                <div className="inline-block pb-2">
                    <HeaderItem content="home" linkTo="/" />
                    <HeaderItem content="reviews" linkTo="/reviews" />
                    <HeaderItem content={status == "unauthenticated" ? "login" : "logout" } onClick={status == "authenticated" ? signOut : signIn} linkTo="" />
                </div>
                <hr />
            </div>
        </>
    )
}