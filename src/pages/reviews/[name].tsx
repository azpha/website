import RootLayout from '@/components/RootLayout';

// next modules
import Router, {useRouter} from 'next/router';
import Link from 'next/link';
import {useSession} from 'next-auth/react';
import Image from 'next/image';

// api
import {api} from '@/utils/api'

// icons
import { Trash } from 'grommet-icons';

export default function ReviewPage() {
    const router = useRouter()
    const name = router.query.name as string
    const { status } = useSession()

    // trpc stuff
    const {data: bookData} = api.post.getOne.useQuery(name)
    const deletionMutation = api.post.delete.useMutation()

    function deleteItem() {
        if (bookData) {
            deletionMutation.mutate(bookData.id)
            Router.replace("/").catch(() => {
                console.error("Failed to reroute user!")
            })
        }
    }

    if (bookData) {
        return (
            <RootLayout>
                <div className="mx-auto w-1/2 text-center flex justify-center">
                    <Image src={bookData.image} width="150" height="150" alt={`${bookData.name} ${bookData.type} cover`} />
                </div>

                <div className="mx-auto w-1/2 text-center text-white">
                    <h1 className="text-2xl font-bold">{bookData.name} { status == "authenticated" ? <Trash onClick={deleteItem} className="hover:cursor-pointer" /> : ""}</h1>
                    
                    <div className="pt-2 pb-2">
                        <hr />
                    </div>

                    {bookData.reviewContents}
                </div>
            </RootLayout>
        )
    } else {
        return (
            <RootLayout>
                <div className="text-center text-2xl font-bold">
                    <p>Well, that&apos;s not good..</p>
                </div>

                <div className="text-center">
                    <p>You&apos;ve reached a page that doesn&apos;t exist. Lets fix that.</p>
                    <Link href="/" className="hover:underline hover:cursor-pointer hover:text-gray-500">
                        Head Home
                    </Link>
                </div>
            </RootLayout>
        )
    }
}