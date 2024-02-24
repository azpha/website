import Link from "next/link"
import { Trash } from "grommet-icons"

type SocialCardProps = {
    name: string,
    url: string,
    showDelete: boolean,
    deleteCallback: () => void
}

export default function SocialMediaCard(props: SocialCardProps) {
    return (
        <div>
            {
                props.showDelete && <Trash onClick={props.deleteCallback} color="white" className="pl-2 hover:cursor-pointer" />
            }
            <Link href={props.url} target="_blank">
                <div className="bg-white py-5 w-full text-left">
                    <h2 className="px-4 text-lg font-bold">{props.name}</h2>
                </div>
            </Link>
        </div>
    )
}