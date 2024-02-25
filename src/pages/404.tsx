import Head from '@/components/Head'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <main className="bg-black flex min-h-screen">
            <Head />
            <div className="m-auto text-white text-center">
                <h1 className="text-center text-2xl font-bold">Well, this is awkward..</h1>
                <p>There is nothing here. An endless void, if you will.</p>
                <p>How about we <span className="underline hover:text-gray-500"><Link href="/">head back?</Link></span> Or you could check out <span className="underline hover:text-gray-500"><Link target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">this cool video I found.</Link></span></p>
            </div>
        </main>
    )
}