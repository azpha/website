export default function Project({
    name,
    description,
    urlTo,
    subtitle,
    bullets
}: {
    name: string,
    description: string,
    urlTo?: string,
    subtitle?: string,
    bullets?: string[]
}) {
    const mapBullets = () => {
        return bullets?.map((v,k) => {
            return <li className="list-inside list-disc" key={k}>{v}</li>
        })
    }

    return (
        <div className="bg-white text-black p-2">
            <div className="float-left">
                <p className="pl-2 text-2xl font-bold">{name} 
                    {
                        urlTo ? (
                            <a className="text-sm hover:underline pl-2" target="_blank" href={urlTo}>
                                Project Website
                            </a>
                        ) : (
                            <span className="text-base pl-2">
                                {subtitle}
                            </span>
                        )

                    }
                </p>
            </div>

            <div className="clear-left text-left pl-2.5">
                <p>{description}</p>
                {
                    bullets && (
                        <ul>
                            {mapBullets()}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}