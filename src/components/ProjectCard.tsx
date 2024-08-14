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
        <a href={urlTo} target="_blank">
            <div className="bg-white text-black max-w-fit mx-auto rounded-lg overflow-hidden">
                <img
                    src={image}
                    width="400"
                    height="300"
                    alt={name}
                    className="w-full h-48 object-cover"
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