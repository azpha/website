type InputOptionProps = {
    label: string,
    inputName: string,
    isTextArea?: boolean
}

export default function InputOption(props: InputOptionProps) {
    return (
        <div className="pt-2 pb-2">
            <label className="font-bold">{props.label}</label><br />
            {
                props.isTextArea ?
                <textarea className="bg-gray-800 rounded-sm text-white resize-none h-32 w-72" name={props.inputName} />
                :
                <input className="bg-gray-800 rounded-sm text-white" name={props.inputName} />
            }
        </div>
    )
}