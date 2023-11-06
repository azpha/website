import Link from "next/link"

type ProjectCardProps = {
    name: string,
    subHeading?: string,
    description: string,
    urlTo: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.urlTo} target="_blank" rel="noreferrer">
            <div className="mx-auto justify-center flex">
                <div className="w-1/2 rounded-lf relative">
                    <div className="top-0 left-0 p-2 bg-gray-800">
                        <p className="font-bold">{props.name}</p>
                        <p className="pb-2">{props.subHeading}</p>
                        <hr />
                        <p className="text-sm pt-2">{props.description}</p>
                    </div>
                </div>  
            </div>
        </Link>
    )
}