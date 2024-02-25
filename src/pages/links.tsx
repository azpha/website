import SocialCard from '@/components/SocialCard'
import Head from '@/components/Head';
import { api } from "@/utils/api";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';

export default function Links() {
    const router = useRouter();
    const {status} = useSession();
    const [links, setLinks] = useState<React.JSX.Element[] | null>(null);
    
    // trpc hooks
    const { data: linkData } = api.links.getAll.useQuery()
    const deleteMutation = api.links.delete.useMutation()

    useEffect(() => {
        if (!links && linkData) {
            const allLinks = [];

            for (const link of linkData) {
                allLinks.push(
                    <SocialCard 
                        name={link.name}
                        key={link.id}
                        url={link.url}
                        showDelete={status == "authenticated"}
                        deleteCallback={() => {
                            deleteMutation.mutate(link.id);
                            router.reload()
                        }}
                    />
                )
            }

            setLinks(allLinks)
        }
    })

    return (
        <main className="bg-black flex flex-col justify-center items-center min-h-screen">
            <Head />
            <Link href="/">
                <h1 className="text-white text-sm underline hover:text-gray-500 pb-2">&lt;- Back Home</h1>
            </Link>
            <div className="bg-zinc-900 p-10 rounded-sm">
                <div className="pb-2 flex flex-col justify-center items-center">
                    <Image className="rounded-lg" width="90" height="90" alt="Profile Picture" src="https://storage.thatalex.dev/content/pfp.png" />
                    <div className="text-white text-center pt-2">
                        <h1>Alex</h1>
                        <p>I&apos;m Alex, a QA Engineer by day and developer by night</p>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                </div>

                <div className="space-y-2">
                    {
                        links && links.length > 0 ? links : <h1 className="text-center text-white font-bold">Uh oh, there are no links here!</h1>
                    }
                </div>
            </div>
        </main>
    )
}