import React, { useState } from 'react'


export default function Announcment({text}) {
    const [show, hide] = useState("flex");
    return (
        <div className="w-full sticky top-0">
            <div
                className={`py-3 px-0 font-medium justify-center items-center cursor-pointer transition-all duration-700 text-white delay-100 ${show} hover:bg-green-400  sm:text-mini text-xs bg-blue-800 pr-10 pl-4`}
            >
                <div className="break-keep">{text}</div>
                <p
                    className="absolute right-3 z-10 cursor-pointer font-semibold hover:text-blue-900 text-white"
                    onClick={() => {
                        hide("hidden");
                    }}
                >
                    X
                </p>
            </div>
        </div>
    )
}
