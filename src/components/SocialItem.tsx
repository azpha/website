type SocialItemType = {
    urlTo: string,
    title: string
}

export default function SocialItem({
    urlTo,
    title
}: SocialItemType) {
    return (
        <a 
            href={urlTo} 
            target="_blank"
            className="hover:text-gray-500 hover:underline"
        >
            {title}
        </a>
    )
}