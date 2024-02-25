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
        return <p key={k} className="border-solid border border-red-500 max-w-fit p-1 inline">{v}</p>
    })

    return (
        <div className="lg:w-1/2 sm:max-w-1/2 rounded-lf">
            <div className="top-0 left-0 p-2 bg-gray-800">
                <div className="pb-2">
                <p className="font-bold inline pr-2">{props.name}</p>
                    <div className="pt-2 pb-2 inline-block space-x-2">
                        {technologies}
                    </div>
                </div>
                <hr />
                <p className="text-sm pt-2 leading-6">{props.description}</p>

                <div className="block pt-2">
                    <Link href={props.urlTo} target="_blank">
                        <p className="bg-zinc-900 max-w-fit p-2 rounded-sm">Source</p>
                    </Link>
                </div>
            </div>
        </div>  
    )
}