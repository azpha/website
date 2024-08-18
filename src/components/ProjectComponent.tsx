export default function ProjectComponent({
    url,
    header,
    projectHeader,
    projectSubheader,
    projectImage,
    projectImageSize = "100"
}: {
    url: string,
    header: string,
    projectHeader: string,
    projectSubheader: string,
    projectImage: string,
    projectImageSize?: string
}) {
    return (
        <a href={url} target="_blank" className="mx-auto">
            <div className="bg-white rounded-lg text-black w-full mx-auto p-2">
                <div className="p-2">
                    <h1 className="text-center font-semibold">{header}</h1>
                </div>

                <div className="flex items-center">
                    <img src={projectImage} width={projectImageSize} />

                    <div className="flex flex-wrap mx-2">
                        <h1 className="font-bold w-[190px] text-left truncate whitespace-nowrap overflow-hidden">{projectHeader}</h1>
                        <h1 className="w-3/4 text-left truncate whitespace-nowrap overflow-hidden">{projectSubheader}</h1>
                    </div>
                </div>
            </div>
        </a>
    )
}