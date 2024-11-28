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
    projectImage?: string,
    projectImageSize?: string
}) {
    return (
        <a href={url} target="_blank">
            <div className="bg-white rounded-lg text-black p-2">
                <h1 className="text-center font-semibold">{header}</h1>

                <div className="block">
                    <div className="flex items-center">
                        {
                            projectImage && <img src={projectImage} width={projectImageSize} className="flex-shrink-0" />
                        }

                        <div className="flex flex-col mx-2 min-w-0 flex-grow">
                            <h1 className="font-bold text-left truncate">{projectHeader}</h1>
                            <h1 className="text-left truncate">{projectSubheader}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}