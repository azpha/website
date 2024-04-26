import RootLayout from "@/components/RootLayout";
import Link from "next/link";

export default function LinksPage() {
    return (
        <RootLayout showHeader={true} isHomePage={false}>
            <div className="text-green-500">
                <h1 className="text-3xl font-bold">
                    My Links!
                </h1>

                <div className="space-y-2">
                    <Link
                        href="https://twitter.com/avvex__"
                        target="_blank"
                    >
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl text-center">Twitter</h1>
                        </div>
                    </Link>
                    <Link
                        href="https://mast.thatalex.dev/@alex"
                        target="_blank"
                    >
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl text-center">Mastodon</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </RootLayout>
    )
}