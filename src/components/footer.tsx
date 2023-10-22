import { Twitter, LinkedinOption, MailOption } from "grommet-icons"
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 p-2 text-white">
                <p className="text-center">
                    <Link href="mailto:alex@alexavfrantz.com">
                        <p className="hover:text-gray-500 hover:underline hover:cursor-pointer">
                            alex@alexavfrantz.com
                        </p>
                    </Link>
                </p>
                <p className="text-center">
                    &copy; Alex Frantz, 2023
                </p>
                <p className="text-center">
                    <Link href="https://twitter.com/avvex__" target="_blank" rel="noreferrer">
                        <Twitter color='plain' className="pr-2" size="30" />
                    </Link>

                    <Link href="https://linkedin.com/in/thatalex" target="_blank" rel="noreferrer">
                        <LinkedinOption className="pr-2" size="30" />
                    </Link>

                    <Link href="mailto:alex@alexavfrantz.com" target="_blank" rel="noreferrer">
                        <MailOption className="pr-2" size="30" />
                    </Link>
                </p>
            </div>
        </>
    )
}