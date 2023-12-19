import { Twitter, LinkedinOption } from "grommet-icons"
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 p-2 text-white">
                <p className="text-center">
                    <Link href="mailto:alex@alexavfrantz.com" className="hover:text-gray-500 hover:underline hover:cursor-pointer">
                        alex@alexavfrantz.com
                    </Link>
                </p>
                <p className="text-center">
                    All music, game, TV and movie covers are owned by their respective authors.<br/>Currently playing info provided by Last.fm
                </p>
                <p className="text-center">
                    &copy; Alex Frantz, 2023
                </p>
                <p className="text-center space-x-2">
                    <Link href="https://twitter.com/avvex__" target="_blank" rel="noreferrer">
                        <Twitter color='plain' size="30" />
                    </Link>

                    <Link href="https://linkedin.com/in/thatalex" target="_blank" rel="noreferrer">
                        <LinkedinOption size="30" />
                    </Link>
                </p>
            </div>
        </>
    )
}