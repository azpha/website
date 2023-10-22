import Link from "next/link"

type HeaderItemProps = {
    content: string,
    linkTo: string,
    onClick?: any, // don't even wanna bother
    newWindow?: boolean
}
export default function HeaderItem(props: HeaderItemProps) {
    if (props.onClick) {
        return (
            <>
                <button className="inline hover:text-gray-500 hover:underline pr-2 "
                    onClick={props.onClick}
                >
                    {props.content}
                </button>
            </>
        )
    } else {
        return (
            <p className="inline pr-2 hover:text-gray-500 hover:underline">
                <Link href={props.linkTo} target={props.newWindow ? "_blank" : "_self"}>
                    {props.content}
                </Link>
            </p>
        )
    }
}