import RootLayout from '@/components/RootLayout';

// next modules
import Router, {useRouter} from 'next/router';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {useSession} from 'next-auth/react';

// api
import {api} from '@/utils/api'

// icons
import { Trash } from 'grommet-icons';

export default function BlogPage() {
    const router = useRouter()
    const id = Number(router.query.id)
    const { status } = useSession()

    // trpc stuff
    const {data: blogData} = api.blog.getOne.useQuery(id)
    const deletionMutation = api.blog.delete.useMutation()

    function deleteItem() {
        if (blogData) {
            deletionMutation.mutate(id)
            Router.replace("/").catch(() => {
                console.error("Failed to reroute user!")
            })
        }
    }

    if (blogData) {
        return (
            <RootLayout>
                <div className="mx-auto w-1/2 text-white">
                    <h1 className="text-2xl font-bold text-center">{blogData.name} { status == "authenticated" ? <Trash onClick={deleteItem} className="hover:cursor-pointer" /> : ""}</h1>
                    
                    <div className="pt-2 pb-2">
                        <hr />
                    </div>

                    <Markdown remarkPlugins={[remarkGfm]} className="text-white w-1/2 mx-auto">
                        {blogData.contents}
                    </Markdown>
                </div>
            </RootLayout>
        )
    } else {
        return (
            <RootLayout>
                <div className="text-center text-2xl font-bold text-white">
                    <p>Well, that&apos;s not good..</p>
                </div>

                <div className="text-center text-white">
                    <p>You&apos;ve reached a page that doesn&apos;t exist. Lets fix that.</p>
                    <Link href="/" className="hover:underline hover:cursor-pointer hover:text-gray-500">
                        Head Home
                    </Link>
                </div>
            </RootLayout>
        )
    }
}