export default function Project({
    name,
    image,
    description,
    urlTo
}: {
    name: string,
    image: string,
    description: string,
    urlTo?: string,
}) {
    return (
        <a href={urlTo} target="_blank" className="max-w-fit mx-auto">
            <div className="bg-white text-black mx-auto rounded-lg max-w-fit lg:max-w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-24 object-cover"
                />

                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    )
}