import Link from "next/link"

type HeaderItemProps = {
    content: string,
    linkTo: string,
    newWindow?: boolean
}
export default function HeaderItem({
    content,
    linkTo,
    newWindow
}: HeaderItemProps) {
    return (
        <Link
            className="inline text-green-500 hover:underline font-bold text-3xl text-center" 
            href={linkTo} 
            target={newWindow ? "_blank" : "_self"}
        >
            {content}
        </Link>
        // <>
        //     <button className="inline text-green-500 hover:underline font-bold text-3xl pr-2"
        //         onClick={props.onClick}
        //     >
        //         {props.content}
        //     </button>
        // </>
    )
}