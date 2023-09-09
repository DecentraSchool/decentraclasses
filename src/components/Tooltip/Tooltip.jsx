
export default function Tooltip({ message, children }) {
    return (
    <div className="group relative flex">
        {children}
        <span className="fixed right-[20px] scale-0 bottom-[110px] transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
    </div>
    )
}

