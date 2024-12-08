export default function CustomButton({
    to,
    icon,
    children
}: {
    to: string,
    icon?: JSX.Element,
    children: string | JSX.Element | JSX.Element[]
}) {
    return (
        <div>
            <a href={to} target="_blank">
                <div className={`bg-black text-white text-lg font-semibold text-left p-2 w-52 rounded-lg`}>
                    <div className="px-1 space-x-2">
                        <div className="inline">
                            { icon && icon }
                        </div>
                        <div className="inline">
                            {children}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}