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
        <a href={url} target="_blank">
            <div className="bg-white text-black max-w-fit mx-auto p-2">
                <div className="flex items-center">
                    <img src={image} width={imageSize} />

                    <div className="flex flex-wrap mx-2">
                        <h1 className="font-bold">{header}</h1>
                        <div className="basis-10" />
                        <h1>{subheader}</h1>
                    </div>
                </div>
            </div>
        </a>
    )
}