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
        <div className="bg-gray-500 rounded-lg text-center max-w-sm p-4 mx-auto">
            <Link href={props.url}>
                {props.name}
            </Link>
            {
                props.showDelete && <Trash onClick={props.deleteCallback} color="plain" className="pl-2 hover:cursor-pointer" />
            }
        </div>
    )
}