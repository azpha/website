import Image from "next/image"

type ReviewCardProps = {
    title: string,
    image: string,
    url: string
}

export default function ReviewCard(props: ReviewCardProps) {
    return (
        <>
            <div className="inline pr-4 pb-2">
                <Image alt={props.title + " cover"} width="160" height="160" src={props.image} />
                <p className="font-bold pt-2 text-center">{props.title}</p>
            </div>
        </>
    )
}