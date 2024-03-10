import { FaRegHeart, FaHeart, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router-dom"

const Mentor = ({ isrc, name, tagline, experience, linkedIn, id }) => {
    return (
        <div id={id} className="gap-[15px] bg-white bg-opacity-20 rounded-[15px] border border-zinc-300 backdrop-blur-sm flex flex-col shadow-sm  px-[15px] py-[15px] h-full">
            <Link to={`${id}`} >
                <div className='relative'>

                    <img className="w-full rounded-tl-[15px] rounded-tr-[15px]" src='https://via.placeholder.com/236x250' />

                    <FaRegHeart
                        className="absolute bottom-[11px] right-[11px]"
                        size="20px"
                        color="black"
                    />
                    <FaHeart
                        className="absolute bottom-[12px] right-[12px]"
                        size="18px"
                        color="white"
                    />
                </div>
            </Link>
            <div className='flex flex-col gap-[10px] justify-between h-full'>
                <div className='flex flex-col gap-0.5'>
                    <p className='md:text-xl text-lg font-medium'>{name}</p>
                    <p className='md:text-[15px] text-[12px]'>{tagline}</p>
                </div>
                <div className='flex justify-end items-center gap-[10px]'>
                    <p className="py-[6px] px-[35px] bg-white rounded-[10px] border border-stone-300 text-center md:text-[15px] text-[12px] font-normal">
                        <span className='text-stone-800 '>Experience</span>
                        <br />
                        <span className='text-black '>{experience} years</span>
                    </p>
                    <div className="w-[25px] h-[25px] rounded-full bg-black flex items-center justify-center">
                        <a href={linkedIn} target="_blank" rel="noreferrer">
                            <FaLinkedinIn color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentor