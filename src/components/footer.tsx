import Link from 'next/link';

export default function Footer() {
    const date = new Date()

    return (
        <>
            <div className="relative sm:w-1/2 m-auto mt-5 rounded-t-sm bg-zinc-900 p-2 text-white">
                <p className="text-center">
                    <Link href="mailto:alex@alexavfrantz.com" className="hover:text-gray-500 hover:underline hover:cursor-pointer">
                        alex@alexavfrantz.com
                    </Link>
                </p>
                <p className="text-center">
                    &copy; Alex Frantz, {date.getFullYear()}
                </p>
            </div>
        </>
    )
}