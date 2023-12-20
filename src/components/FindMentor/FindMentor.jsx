import mentors from "./mentors.json";
import Mentor from './Mentor'
import { slideAnimateVariants } from "../animate/animate";
import { motion } from 'framer-motion';
import { useState } from "react";


const FindMentor = () => {
    const [query, setQuery] = useState("");

    return (
        <main className='xl:px-[88px] md:px-[44px] px-[20px] mb-[24px]'>
            <div className='flex items-center justify-center py-[29px]'>
                <div className="flex items-center flex-col">
                    <div className="flex w-full flex-col align-middle justify-center text-center p-8">
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
                            className="hidden md:text-l md:block"
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
                    <div className="w-[100%] flex justify-center align-middle">
                        <input
                            className="m-5 align-middle pl-5"
                            style={{
                                width: "350px",
                                height: "40px",
                                border: "2px solid black",
                                borderRadius: "20px",
                                fontSize: "20px",
                                fontFamily: "monospace",
                            }}
                            placeholder=" &#128270; Search mentors by name"
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                </div>
            </div>
            <section className="md:pl-[36px] md:pr-[54px] py-[15px] flex flex-col gap-5">
                <div className=" py-3 flex justify-between items-end gap-5">
                    <h2 className="text-[#222527] font-semibold text-[30px]">Our Mentors.</h2>
                    <button className="text-white text-[14px] font-[500] rounded-[25px] bg-[#0E76FD] w-40 uppercase">Explore all</button>
                </div>
                <div className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-[45px] ">
                    {
                        mentors.data.filter((mentor) => {
                            if (query === "") {
                                return mentor;
                            } else if (mentor?.name?.toLowerCase().includes(query.toLowerCase())) {
                                return mentor;
                            }
                        }).map((mentor) => {
                            return (
                                <Mentor id={mentor._id} key={mentor._id} isrc={mentor.img} name={mentor.name} tagline={mentor.tagLine} experience={mentor.experience} linkedIn={mentor.contact.Linkdin} />
                            );
                        })
                    }
                </div>
            </section>

            <div className="h-[380px] rounded-[10px] bg-[#FFBEA74D] flex items-center px-24">
                <div className="flex flex-col flex-1 justify-center">
                    <p className="text-4xl font-bold mb-5 max-w-[600px] leading-relaxed">Get ready to learn and grow your skill</p>
                    <button className="text-white text-[12px] font-[500] bg-blue-400 w-40">Get Start Now</button>
                </div>
                <div className="w-[400px]">
                    <img src="./images/mentorHero.png" />
                </div>
            </div>
        </main>
    )
}

export default FindMentor