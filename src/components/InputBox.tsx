export default function InputBox({
    name,
    placeholder = "",
    isText = true,
    disabled = false,
    type = "text",
    onChange
}: {
    name: string,
    isText?: boolean,
    disabled?: boolean,
    placeholder?: string,
    type?: string,
    onChange?: (value: string) => void
}) {
    if (isText) {
        return (
            <div className="block">
                <input 
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="rounded-lg p-2 w-1/2 text-black"
                    onChange={onChange ? ({target}) => onChange(target.value) : undefined}
                    disabled={disabled}
                />
            </div>
        )
    } else {
        return (
            <div className="block">
                <textarea 
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange ? ({ target }) => onChange(target.value) : undefined}
                    disabled={disabled}
                    className="rounded-lg p-2 w-1/2 h-32 text-black"
                />
            </div>
        )
    }
}