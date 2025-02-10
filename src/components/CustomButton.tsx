import React from "react"
import Link from "next/link"

export default function CustomButton({
    to,
    label
}: {
    to: string,
    label: string
}) {
    return (
        <div>
            <Link href={to} target="_blank">
                <div className={`bg-black text-white text-lg font-semibold text-left p-2 w-52 rounded-lg`}>
                    <div className="px-1 space-x-2">
                        <div className="inline">
                            {label}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}