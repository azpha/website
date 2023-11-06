import Link from "next/link"

type SocialCardProps = {
    name: string,
    url: string
}

export default function SocialMediaCard(props: SocialCardProps) {
    return (
        <div className="bg-gray-500 rounded-lg text-center max-w-sm p-4 mx-auto">
            <Link href={props.url}>
                {props.name}
            </Link>
        </div>
    )
}