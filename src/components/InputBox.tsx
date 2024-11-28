export default function InputBox({
    name,
    placeholder = "",
    isText = true,
    onChange
}: {
    name: string,
    isText?: boolean,
    placeholder?: string,
    onChange: (value: string) => void
}) {
    if (isText) {
        return (
            <div className="block">
                <input 
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    className="rounded-lg p-2 w-1/2 text-black"
                    onChange={({target}) => onChange(target.value)}
                />
            </div>
        )
    } else {
        return (
            <div className="block">
                <textarea 
                    name={name}
                    placeholder={placeholder}
                    onChange={({ target }) => onChange(target.value)}
                    className="rounded-lg p-2 w-1/2 h-32 text-black"
                />
            </div>
        )
    }
}