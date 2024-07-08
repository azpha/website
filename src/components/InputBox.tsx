export default function InputBox({
    name,
    placeholder,
    isText = true,
    onChange
}: {
    name: string,
    isText?: boolean,
    placeholder: string,
    onChange: (value: string) => void
}) {
    if (isText) {
        return (
            <div className="block">
                <input 
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    className="bg-black rounded-lg p-2 text-white w-full"
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
                    className="bg-black rounded-lg p-2 text-white w-full h-32"
                />
            </div>
        )
    }
}