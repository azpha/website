import Link from 'next/link';

export default function Footer() {
    const date = new Date()

    return (
        <>
            <div className="relative rounded-t-sm p-2 text-white opacity-50">
                <p className="text-center">
                    <Link href="mailto:alex@alexavfrantz.com" className="hover:text-gray-500 hover:underline hover:cursor-pointer">
                        alex@alexavfrantz.com
                    </Link>
                </p>
                <p className="text-center">
                    The &apos;PipBoy&apos; is owned by Bethesda, I&apos;m just doing this for fun!
                </p>
                <p className="text-center">
                    &copy; Alex Frantz, {date.getFullYear()}
                </p>
            </div>
        </>
    )
}