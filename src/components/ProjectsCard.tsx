import Link from "next/link"

type ProjectCardProps = {
    name: string,
    key: string,
    description: string,
    urlTo: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.urlTo} target="_blank" rel="noreferrer">
            <div className="inline">
                <div key={props.key} className="w-1/2 rounded-lf relative">
                    <div className="top-0 left-0 p-2 bg-gray-500">
                        <p className="font-bold">{props.name}</p>
                        <p className="text-sm">{props.description}</p>
                    </div>
                </div>  
            </div>
        </Link>
    )
}