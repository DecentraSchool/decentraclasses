import { BiHeart } from 'react-icons/bi'
import { LuCalendarDays } from 'react-icons/lu'

const Mentor = () => {
    return (
        <div className="gap-[15px] bg-white flex flex-col rounded-[25px] shadow-sm shadow-black border-zinc-300 px-[11px] py-[15px]">
            <div className='relative'>
                <img className="w-full rounded-tl-[20px] rounded-tr-[20px]" src="https://via.placeholder.com/248x250" />
                <div className="absolute py-[8px] px-[12px] bg-white rounded-[10px] border border-stone-300 top-[14px] right-[11px] flex items-center gap-2">
                    <LuCalendarDays />
                    <p className="text-black text-xs font-medium font-['Poppins']">Available</p>
                </div>
                <div className='absolute  text-xl  bottom-[11px] right-[11px]'>
                    <BiHeart />
                </div>
            </div>
            <div className='flex flex-col gap-0.5'>
                <p className='text-xl font-medium'>Atharva Akshat</p>
                <p className='text-[15px]'>Python specialist / AMA session</p>
            </div>
        </div>
    )
}

export default Mentor