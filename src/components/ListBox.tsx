export default function ListBox({
    title,
    points
}: {
    title: string,
    points: string[]
}) {
    return (
        <div className="bg-slate-100 text-black rounded-lg p-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
                {
                    points.map((v,k) => {
                        return <li key={k}>{v}</li>
                    })
                }
            </ul>
        </div>
    )
}