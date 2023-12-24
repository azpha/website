import {useSession, signIn, signOut} from 'next-auth/react';
import HeaderItem from "./HeaderItem";

export default function Header() {
    const { status } = useSession()

    return (
        <>
            <div className="text-white max-w-sm pt-2 pb-4 mx-auto">
                <p className="text-2xl font-bold">alex</p>
                <div className="inline-block pb-2">
                    <HeaderItem content="home" linkTo="/" />
                    <HeaderItem content="reviews" linkTo="/reviews" />
                    <HeaderItem content="links" linkTo="/links" />
                    <HeaderItem content="blog" linkTo="/blog" />
                    { status === "authenticated" &&
                        <HeaderItem 
                            content="create"
                            linkTo="/create"
                        />
                    }
                    <HeaderItem content={status == "unauthenticated" ? "login" : "logout" } onClick={async () => {
                        if (status == "unauthenticated") {
                            await signIn()
                        } else {
                            await signOut()
                        }
                    }} linkTo="" />
                </div>
                <hr />
            </div>
        </>
    )
}