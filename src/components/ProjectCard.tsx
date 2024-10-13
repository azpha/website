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
            <div className="bg-white text-black mx-auto rounded-lg overflow-hidden max-w-full">
                <img 
                    src={image}
                    alt={name}
                    className="w-full h-24 object-cover"
                />

                <div className="p-4 space-y-2">
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}