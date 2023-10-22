import Image from "next/image"
import Link from 'next/link';

type ReviewCardProps = {
    title: string,
    image: string,
    url: string,
    showText: boolean
}

export default function ReviewCard(props: ReviewCardProps) {
    return (
        <Link href={props.url}>
            <div className="inline">
                <Image alt={props.title + " cover"} width="160" height="160" src={props.image} className="p-2" />
                {
                    props.showText ?
                    <p className="font-bold pt-2 text-center">{props.title}</p>
                    :
                    ""
                }
            </div>
        </Link>
    )
}