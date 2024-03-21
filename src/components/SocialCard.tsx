import Link from "next/link"
import { Trash } from "grommet-icons"

type SocialCardProps = {
    name: string,
    id: number,
    url: string,
    isAuthenticated: boolean,
    deleteCallback: () => void
}

export default function SocialMediaCard(props: SocialCardProps) {
    return (
        <div className="bg-white p-5 w-full text-left">
            <Link href={props.url} target="_blank">
                <h1 className="inline font-bold">{props.name}</h1>
            </Link>
            
            { props.isAuthenticated && (
                <>
                    <Trash onClick={props.deleteCallback} color="black" className="float-right inline hover:cursor-pointer" />
                    <p className="float-right opacity-50 font-bold inline mr-2">ID: {props.id}</p>
                </>
            )}
        </div>
    )
}