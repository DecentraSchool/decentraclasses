import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ParentContext } from "../../contexts/ParentContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Schedule from "./mentor/Schedule";
import { fetchAllData } from "./constant";

const MentorById = () => {
    const { id } = useParams();
    const [getData, setData] = useState({
        mentorId: null,
        name: null,
        img: null,
        tagLine: null,
        experience: null,
        contact: {
            Linkdin: null,
            message: null,
        }
    });
    const { mentorData, setMentorData } = useContext(ParentContext);

    const getAllMentors = async (endPoint) => {
        const res = await fetchAllData(endPoint);
        if (!res.error) {
            setMentorData(res.data);
        }
    }

    useEffect(() => {
        getAllMentors('listMentors');
    }, [])

    const filterDataById = (data, targetId) => {
        return data.filter(item => item.mentorId === targetId);
    };



    useEffect(() => {
        const filteredData = filterDataById(mentorData, id);
        if (filteredData.length) {
            setData(filteredData[0]);
        }
    }, [])

    return (
        <div id={getData.mentorId || "id"} className="gap-[15px] bg-white bg-opacity-20 rounded-[15px] border border-zinc-300 backdrop-blur-sm grid xl:grid-cols-[1fr_500px] lg:grid-cols-[1fr_300px] shadow-sm  md:px-[110px] px-[24px] pt-[22px] pb-[71px]">
            <div className="flex flex-col items-start gap-[23px]">
                <div className="flex sm:flex-row flex-col sm:gap-[42px] gap-[20px] sm:items-center items-start">
                    <div className="w-[159px] rounded-[25px] border-[12px] border-white ">
                        <img className="w-full rounded-[12px]" src={'https://via.placeholder.com/236x250'} />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-xl font-medium '>{getData.name || "XYZ"}</p>
                        <p className="xl:text-[24px] md:text-[20px] text-[16px] font-[500] flex flex-col text-[#979797]">
                            <span>{getData.tagLine || "TagLine"}</span>
                            <span>{getData.experience || 0}+ years of experience</span>
                        </p>
                        <div className="text-[15px] text-black font-[500] flex gap-[18px] pt-[12px]">
                            <a href="#" className="bg-white px-[6.5px] py-[4.5px] rounded-[5px] shadow-sm flex items-center gap-2 ">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0288D1", }} />
                                Linkedin
                            </a>
                            <a href="#" className="bg-white px-[6.5px] py-[4.5px] rounded-[5px] shadow-sm flex items-center gap-2">
                                <FontAwesomeIcon icon={faMessage} />
                                Message
                            </a>
                        </div>
                    </div>
                </div>
                <p className="xl:text-[24px] md:text-[20px] text-[16px] border-b-[2px] border-[#8b8b8b]">1 on 1 Mentorship</p>
                <div className="sm:p-[16px] p-[10px] rounded-[10px] border-[1px] border-[#D9D9D9]">
                    <p className="xl:text-[16px] md:text-[14px] text-[12px]">
                        Meet {getData.name || "XYZ"}, your Python specialist! With over half a year of hands-on experience mastering Python;&apos;s power, I bring a wealth of knowledge to our team. My expertise goes beyond development  they are also a seasoned instructor, making complex concepts easy to grasp for learners of all levels.
                    </p>
                </div>
            </div>
            <Schedule id={id} />
        </div>
    )
}

export default MentorById