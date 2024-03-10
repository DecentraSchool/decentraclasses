import Mentor from './mentor/Mentor'
import { slideAnimateVariants } from "../animate/animate";
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from "react";
import { fetchAllData } from "./constant";
import { ParentContext } from '../../contexts/ParentContext';
import SkeletonLoader from '../Courses/SkeletonLoader';


const FindMentor = () => {
    const [query, setQuery] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [loader, setloader] = useState(true);
    const exploreAllButtonRef = useRef(null);
    const { mentorData, setMentorData } = useContext(ParentContext);

    const getAllMentors = async (endPoint) => {
        const res = await fetchAllData(endPoint);
        setloader(false);
        if (!res.error) {
            setMentorData(res.data);
        }
    }

    useEffect(() => {
        getAllMentors('listMentors');
    }, [])
    return (
        <main className='xl:px-[88px] md:px-[44px] px-[20px] mb-[24px] relative'>
            <div className='flex absolute md:top-24 top-4 xl:left-32 left-8  w-12 '>
                <img src="./images/mentor-bg/three.png" className='w-full animate-pulse' />
            </div>
            <div className='flex absolute md:top-48 top-24 xl:left-80 md:left-32  md:w-10 w-8'>
                <img src="./images/mentor-bg/one.png" className='w-full animate-pulse' />
            </div>
            <div className='flex absolute md:top-24 top-4 xl:right-32 right-8 w-12'>
                <img src="./images/mentor-bg/four.png" className='w-full animate-pulse' />
            </div>
            <div className='flex absolute md:top-48 top-24 xl:right-80 md:right-32 right-2 md:w-10 w-8'>
                <img src="./images/mentor-bg/two.png" className='w-full animate-pulse' />
            </div>
            <div className="flex w-full flex-col pt-12 align-middle justify-center text-center px-8">
                <motion.h1
                    className="text-[1.5rem] md:text-2xl font-bold mb-5"
                    variants={slideAnimateVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={1}
                >
                    Learn and grow with the help of world-class mentors
                </motion.h1>
                <motion.p
                    className="md:text-lg text-sm"
                    variants={slideAnimateVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={3}
                >
                    Book and meet over 100+ mentors for 1:1 mentorship in our global community.
                </motion.p>
            </div>


            <section className="md:pl-[36px] md:pr-[54px] py-[15px]" style={{ minHeight: 'calc(100vh - 380px)' }}>
                {
                    loader
                        ?
                        <SkeletonLoader />
                        :
                        <div className='flex flex-col gap-5'>
                            <div className="w-[100%] flex justify-center align-middle pb-6">
                                <input
                                    className="m-5 align-middle pl-5"
                                    style={{
                                        width: "350px",
                                        height: "40px",
                                        border: "2px solid black",
                                        borderRadius: "20px",
                                        fontSize: '20px',
                                        fontFamily: "monospace",
                                    }}
                                    placeholder=" &#128270; Search mentors by name"
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>
                            <div className=" py-3 flex  justify-between md:items-end gap-5">
                                <h2 className="text-[#222527] font-semibold xl:text-[30px] md:text-[24px] text-[20px]">Our Mentors.</h2>
                                <button ref={exploreAllButtonRef} className={`text-white md:text-[14px] text-[10px] font-[500] rounded-[25px] ${showAll ? 'bg-gray-400' : 'bg-[#0E76FD]'} md:w-40 w-28 uppercase`} onClick={() => {
                                    setShowAll(!showAll);
                                    if (!showAll && exploreAllButtonRef.current) {
                                        exploreAllButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: 40 });
                                    }
                                }} disabled={showAll}>Explore all</button>
                            </div>
                            <div className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-[45px] ">
                                {
                                    mentorData.filter((mentor) => {
                                        if (query === "") {
                                            return mentor;
                                        } else if (mentor?.name?.toLowerCase().includes(query.toLowerCase())) {
                                            return mentor;
                                        }
                                    })
                                        .slice(0, showAll ? undefined : 4)
                                        .map((mentor) => {
                                            return (
                                                <Mentor id={mentor.mentorId} key={mentor.mentorId} isrc={mentor.img} name={mentor.name} tagline={mentor.tagLine} experience={mentor.experience} linkedIn={mentor.contact.Linkdin} />
                                            );
                                        })
                                }
                            </div>
                        </div>

                }
            </section>

            <div className="xl:h-[380px] md:h-[240px] rounded-[10px] bg-[#FFBEA74D] flex md:flex-row flex-col items-center xl:px-24 p-[20px]">
                <div className="flex flex-col flex-1 justify-center">
                    <p className="md:text-4xl text-2xl font-bold mb-5 max-w-[600px] leading-relaxed">Get ready to learn and grow your skill</p>
                    <button className="text-white text-[12px] font-[500] bg-blue-400 w-40">Get Start Now</button>
                </div>
                <div className="xl:w-[400px] md:w-[280px] w-[240px]">
                    <img src="./images/mentorHero.png" />
                </div>
            </div>
        </main >
    )
}

export default FindMentor