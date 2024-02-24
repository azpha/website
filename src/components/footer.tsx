import Link from 'next/link';

export default function Footer() {
    const date = new Date()

    return (
        <>
            <div className="absolute bottom-0 left-0 w-full bg-zinc-900 p-2 text-white">
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