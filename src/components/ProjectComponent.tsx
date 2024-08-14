export default function ProjectComponent({
    url,
    header,
    subheader,
    image,
    imageSize = "100"
}: {
    url: string,
    header: string,
    subheader: string,
    image: string,
    imageSize?: string
}) {
    return (
        <a href={url} target="_blank" className="max-w-fit mx-auto">
            <div className="bg-white text-black max-w-fit mx-auto p-2">
                <div className="flex items-center">
                    <img src={image} width={imageSize} />

                    <div className="flex flex-wrap mx-2">
                        <h1 className="font-bold w-full">{header}</h1>
                        <h1>{subheader}</h1>
                    </div>
                </div>
            </div>
        </a>
    )
}