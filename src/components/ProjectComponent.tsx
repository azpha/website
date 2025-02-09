export default function ProjectComponent({
    urlTo,
    description,
    name,
    tags
}: {
    urlTo: string,
    description: string,
    name: string,
    tags: string[]
}) {
    return (
        <a href={urlTo} target="_blank">
            <div className="bg-white text-black mx-auto rounded-lg overflow-hidden">
                <div className="p-4 space-y-2">
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p>{description}</p>

                    <div className="space-x-2">
                        {
                            tags.map((v, k) => (
                                <div className="bg-zinc-600 inline max-w-fit p-[5px] text-xs font-bold rounded-xl bg-opacity-20" key={k}>{v}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </a>
    )
}