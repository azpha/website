import Image from 'next/image'
import Link from 'next/link';

type BlogCardProps = {
    image: string,
    name: string,
    tagline: string,
    id: string
}
export default function BlogCard(props: BlogCardProps) {
    return (
        <Link href={`/blog/${props.id}`}>
            <div className="inline-block">
                <div className="bg-white text-black text-center">
                    <div>
                        <Image src={props.image} width="300" height="300" alt="Blog Cover" />
                    </div>
                    <div className="p-4 divide-y divide-black">
                        <h1 className="font-bold">{props.name}</h1>
                        <p>{props.tagline}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}