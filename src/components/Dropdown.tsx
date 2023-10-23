import React, {useState} from 'react';

type DropdownProps = {
    name: string,
    content: React.JSX.Element[]
}

export default function Dropdown(props: DropdownProps) {
    const [active, setActive] = useState(false)
    return (
        <>
            <div className="relative flex py-5 items-center hover:cursor-pointer" onClick={() => active ? setActive(false) : setActive(true)}>
                <span className="flex-shrink mx-4 text-gray-400">{props.name}</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className={`${active ? "block" : "hidden"} inline-block`}>
                {props.content}
            </div>
        </>
    )
}