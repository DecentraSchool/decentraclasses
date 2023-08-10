

export default function Card({ imgS, paraS, titleS, widS, link }) {
    return (
        <div className="flex justify-between  items-start    sm:max-w-[320px] w-full gap-4  bg-[#b1b1b12f] p-5 pr-8 shadow-sm rounded-tr-full  border-[0.5px] border-[#fff]">
            <div className={`w-${widS}`}>
                <img src={imgS} alt="" className="w-full h-10 rounded-lg" />
            </div>
            <div className="flex flex-col pt-2   gap-3 items-start">
                <a href={link} rel="noreferrer" target="_blank" className="before:bg-[#f5b44b] before:w-0 before:transition-all hover:duration-700 hover:before:w-full before:h-[1.5px] before:rounded-full before:absolute relative before:bottom-[-1px] ">
                    <h2 className="text-[#1d4ed8] font-semibold text-lg">{titleS}</h2>
                </a>
                <p className="line-clamp-3 text-[#3b3b3b] text-sm ">{paraS}</p>
            </div>
        </div>
    )
}