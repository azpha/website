import RootLayout from "@/components/RootLayout";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <RootLayout>
            <Header isNotHomePage={true} />
            <div className="space-y-2 text-center">
                <Link href="https://github.com/azpha/splitstat" target="_blank">
                    <div className="hover:bg-green-500 hover:text-black text-green-500">
                        <h1 className=" text-2xl mx-32">SplitStat</h1>
                    </div>
                </Link>
                <Link href="https://github.com/azpha/mcsrvstat-js" target="_blank">
                    <div className="hover:bg-green-500 hover:text-black text-green-500">
                        <h1 className=" text-2xl mx-32">MCSRVSTAT Wrapper</h1>
                    </div>
                </Link>
                <Link href="https://github.com/azpha/pmanager" target="_blank">
                    <div className="hover:bg-green-500 hover:text-black text-green-500">
                        <h1 className=" text-2xl mx-32">PManager</h1>
                    </div>
                </Link>
                <Link href="https://github.com/azpha/tv-watchlist" target="_blank">
                    <div className="hover:bg-green-500 hover:text-black text-green-500">
                        <h1 className=" text-2xl mx-32">Watchlist</h1>
                    </div>
                </Link>
                <Footer />
            </div>
        </RootLayout>
    )
}