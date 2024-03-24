import Link from "next/link"

type ProjectCardProps = {
    name: string,
    technologies: string[],
    subHeading?: string,
    description: string,
    urlTo: string
}

export default function ProjectCard(props: ProjectCardProps) {
    const technologies = props.technologies.map((v,k) => {
        return <div key={k} className="inline">
            <div className="max-w-fit p-1 inline">
                {v}
            </div>
        </div>
    })

    return (
        <div className="bg-zinc-700 max-w-lg">
            <div className="p-2 space-y-2 space-x-2">
                <h1 className="font-bold text-2xl inline pl-2">{props.name}</h1>
                <div className="inline-block">
                    {technologies}
                </div>
                <hr className="max-w-xs" />
                <p>{props.description}</p>
                
                <div className="bg-zinc-900 max-w-fit p-2 rounded-lg">
                    <Link href={props.urlTo} target="_blank">
                        <p>Source</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}