import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import mentors from "./mentors.json";


const MentorById = () => {
    const { id } = useParams();
    const [getData, setData] = useState('');

    const filterDataById = (data, targetId) => {
        return data.filter(item => item._id === targetId);
    };

    useEffect(() => {

        const filteredData = filterDataById(mentors.data, id);
        console.log(filteredData);
        setData(filteredData[0]);

    }, [])

    return (
        <div id={getData?._id} className="gap-[15px] bg-white bg-opacity-20 rounded-[15px] border border-zinc-300 backdrop-blur-sm flex flex-col shadow-sm  px-[15px] py-[15px]">
            <div className='relative'>
                <img className="w-full rounded-tl-[15px] rounded-tr-[15px]" src={getData?.isrc} />

            </div>
            <div className='flex flex-col gap-[10px] justify-between h-full'>
                <div className='flex flex-col gap-0.5'>
                    <p className='text-xl font-medium'>{getData?.name}</p>
                    <p className='text-[15px]'>{getData?.tagline}</p>
                </div>
                <div className='flex justify-end items-center gap-[10px]'>
                    <p className="py-[6px] px-[35px] bg-white rounded-[10px] border border-stone-300 text-center text-[15px] font-normal">
                        <span className='text-stone-800 '>Experience</span>
                        <br />
                        <span className='text-black '>{getData?.experience} years</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MentorById