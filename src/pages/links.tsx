import RootLayout from "@/components/RootLayout";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import {useState} from 'react';

// icons
import {
    Twitter,
    MailOption
} from 'grommet-icons'

export default function LinksPage() {
    const [icon, setIcon] = useState<Element | null>();

    return (
        <RootLayout>
            <Header isNotHomePage={true} />
            <div className="text-green-500 max-h-96">
                <h1 className="font-bold text-3xl ml-2">My Links!</h1>
                <div className="space-y-2 float-left">
                    <Link 
                        href="https://twitter.com/avvex__" 
                        target="_blank" 
                        onMouseOver={() => {
                            setIcon(<Twitter size="large" />)
                        }}
                        onMouseLeave={() => {
                            setIcon(null)
                        }}
                        >
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl mr-32 ml-2">Twitter</h1>
                        </div>
                    </Link>
                    <Link 
                        href="https://mast.thatalex.dev/@alex" 
                        target="_blank"
                        onMouseOver={() => {
                            setIcon(<MailOption size="large" />)
                        }}
                        onMouseLeave={() => {
                            setIcon(null)
                        }}
                    >
                        <div className="hover:bg-green-500 hover:text-black">
                            <h1 className="text-2xl mr-32 ml-2">Mastodon</h1>
                        </div>
                    </Link>
                </div>

                <div className="float-right">
                    {/* <Twitter size='xlarge' className="mr-24" /> */}
                    {icon}
                </div>
            </div>
            <Footer />
        </RootLayout>
    )
}