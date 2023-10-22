import {useRouter} from 'next/router';
import Header from '@/components/header';
import Footer from "@/components/footer";
import Image from 'next/image';
import {api} from '@/utils/api'
import Link from 'next/link';

export default function ReviewPage() {
    const router = useRouter()
    const name = router.query.name as string
    const {data: bookData} = api.post.getOne.useQuery(name)

    if (bookData) {
        return (
            <main className="min-h-screen bg-black text-white">
                <Header />
                <div className="mx-auto w-1/2 text-center flex justify-center text-white">
                    <Image src={bookData.image} width="150" height="150" alt={`${bookData.name} ${bookData.type} cover`} />
                </div>

                <div className="mx-auto w-1/2 text-center">
                    <h1 className="text-2xl font-bold">{bookData.name}</h1>
                    <hr />
                    {bookData.reviewContents}
                </div>
                <Footer />
            </main>
        )
    } else {
        return (
            <main className="min-h-screen bg-black text-white flex flex-col justify-center items-centers">
                <Header />
                <div className="text-center text-2xl font-bold">
                    <p>Well, that&apos;s not good..</p>
                </div>

                <div className="text-center">
                    <p>You&apos;ve reached a page that doesn&apos;t exist. Lets fix that.</p>
                    <Link href="/" className="hover:underline hover:cursor-pointer hover:text-gray-500">
                        Head Home
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }
}