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
        <div id={getData?._id} className="gap-[15px] bg-white bg-opacity-20 rounded-[15px] border border-zinc-300 backdrop-blur-sm flex shadow-sm  px-[110px] pt-[22px] pb-[71px]">
            <div className="flex items-start gap-[23px] flex-col">
                <div className="flex gap-[42px] items-center">
                    <div className="w-[159px] rounded-[25px] border-[12px] border-white ">
                        <img className="w-full rounded-[12px]" src={getData?.img} />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-xl font-medium '>{getData?.name}</p>
                        <p className="text-[24px] font-[500] flex flex-col text-[#979797]">
                            <span>{getData?.tagLine}</span>
                            <span>{getData?.experience}+ years of experience</span>
                        </p>
                        <div className="text-[15px] text-black font-[500] flex gap-[18px] pt-[12px]">
                            <a href="#" className="bg-white px-[6.5px] py-[4.5px] rounded-[5px] shadow-sm">
                                Linkedin
                            </a>
                            <a href="#" className="bg-white px-[6.5px] py-[4.5px] rounded-[5px] shadow-sm">
                                Message
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-[24px] border-b-[2px] border-[#8b8b8b]">1 on 1 Mentorship</p>
                <div className="p-[16px] rounded-[10px] border-[1px] border-[#D9D9D9]">
                    <p className="text-[16px]">
                        Meet Atharva Akshat, your Python specialist! With over half a year of hands-on experience mastering Python's power, I bring a wealth of knowledge to our team. My expertise goes beyond development  they are also a seasoned instructor, making complex concepts easy to grasp for learners of all levels.
                    </p>
                </div>
            </div>
            <div className='flex p-[29px] flex-col gap-[24px] justify-between h-full border-[#D9D9D9] border-[1px] rounded-[15px]'>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-[20px] font-semibold truncate">Schedule Session</p>
                    <p className="text-[#000000A1] text-[16px]">Pick a date</p>
                </div>
                <div className="flex gap-[18px] ">
                    <div className="border-[#D9D9D9D9] text-[14px] w-[78px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px]">
                        <p className="text-[#0000008A] text-[12px]">STA</p>
                        <p>4 Nov</p>
                        <p className="text-[#65FF99] text-[12px]">10 Slots</p>
                    </div>
                    <div className="border-[#D9D9D9D9] text-[14px] w-[78px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px]">
                        <p className="text-[#0000008A] text-[12px]">STA</p>
                        <p>4 Nov</p>
                        <p className="text-[#65FF99] text-[12px]">10 Slots</p>
                    </div>
                    <div className="border-[#D9D9D9D9] text-[14px] w-[78px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px]">
                        <p className="text-[#0000008A] text-[12px]">STA</p>
                        <p>4 Nov</p>
                        <p className="text-[#65FF99] text-[12px]">10 Slots</p>
                    </div>
                    <div className="border-[#D9D9D9D9] text-[14px] w-[78px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px]">
                        <p className="text-[#0000008A] text-[12px]">STA</p>
                        <p>4 Nov</p>
                        <p className="text-[#65FF99] text-[12px]">10 Slots</p>
                    </div>
                    <div className="border-[#D9D9D9D9] text-[14px] w-[78px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px]">
                        <p className="text-[#0000008A] text-[12px]">STA</p>
                        <p>4 Nov</p>
                        <p className="text-[#65FF99] text-[12px]">10 Slots</p>
                    </div>
                </div>
                <p className="text-[#000000A1] text-[16px]">Pick a date</p>
                <div className="border-[#D9D9D9D9] text-[16px] w-[104px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px]">
                    10:00 PM
                </div>
                <div className="flex justify-between gap-[10px] pt-[18px]">
                    <div className="flex flex-col text-[12px] gap-[12px] text-[#000000A1]">
                        <p>04-November-2023</p>
                        <p>10:00 PM</p>
                    </div>
                    <button className="text-white text-[16px] px-[33px] py-[10px] rounded-[5px] font-[500] bg-[#0E76FD] ">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default MentorById