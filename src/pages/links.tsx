import RootLayout from "@/components/RootLayout";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function LinksPage() {
    return (
        <RootLayout>
            <Header isNotHomePage={true} />
            <div className="text-green-500 text-center">
                <h1 className="font-bold text-3xl">My Links!</h1>
                <div className="space-y-2">
                    <Link href="https://twitter.com/avvex__" target="_blank">
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl mx-32">Twitter</h1>
                        </div>
                    </Link>
                    <Link href="https://mast.thatalex.dev/@alex" target="_blank">
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl mx-32">Mastodon</h1>
                        </div>
                    </Link>
                    <Link href="https://linkedin.com/in/thatalex" target="_blank">
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl mx-32">LinkedIn</h1>
                        </div>
                    </Link>
                    <Link href="https://medal.tv/users/215577" target="_blank">
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl mx-32">Medal.tv</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </RootLayout>
    )
}