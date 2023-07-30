import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";
import bigNumberToString from "bignumber-to-string";
import { getCoursebyId } from "../../../utils/PolybaseUtils";
import courseThumb from "../course-thumb.png";
import instructor from "../instructor.png"
const Course = ({}) => {
  const [courseInfo, setcourseInfo] = useState({});
  const { id } = useParams();
  const getCourseData = async () => {
    const data = await getCoursebyId(id);
    setcourseInfo(data.data);
  };

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <>
      <main>
        <section className="pb-20 flex mt-10  mx-10 gap-8 justify-between">
          <div className="flex flex-col w-full">
            {/* Title Card  */}
            <div className="h-[35%] bg-cyan-900 p-5 rounded-lg text-white">
              <p className="text-blue-400 mb-5">Backend</p>
              <h1 className="text-[2em] font-bold mb-5">Code a BRC-20 token in Clarity on Stacks Blockchain</h1>
              <p className="mb-5">Created By stephan patil</p>
              <p className="mb-5">4 ⭐⭐⭐⭐ (40)</p>
              <p className="mb-5">Last Updated 6/2023 English,Hindi,Spanish[Auto]</p>
            </div>
            <div className="mt-10 ml-20">
              <h1 className="text-[2em] font-bold mb-5">What you'll learn</h1>
              <div className="w-[80%]">
                <p className="mb-5 font-semibold">🎯Create boilerplate starter projects with React, Redux, Express, and Mongo</p>
                <p className="mb-5 font-semibold">🎯Understand common web technologies and design patterns to connect them together</p>
                <p className="mb-5 font-semibold">🎯Master deployment techniques between the production and development environments </p>
              </div>
            </div>
            <div className="mt-10 ml-20 mb-20">
              <h1 className="text-[2em] font-bold mb-5">Course Content</h1>
              <p className="mb-5">
                <span>14 sections </span> • <span>221 lectures</span> • <span>25h 53m total length</span>
                </p>
              <div className="w-[80%] h-[100%] bg-cyan-900 rounded-lg">
                {/* Accordion */}
                <div className="px-5 py-5 w-[100%]">
                <details className="group">
                   <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
                    <div className="flex justify-between p-3">
                  <span className="text-[1.25em]">Course Overview - Start Here</span>
                  <span className="text-[1.25em]">6 lectures | 23 min</span>
                  </div>
                   <span className="transition group-open:rotate-180"></span>
                </summary>
                <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>Course Resources</span>
                  <span>0:25</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>Join Our Community!</span>
                  <span>0:07</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>App Overview</span>
                  <span>4:25</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>User Flow Walk Through</span>
                  <span>2:25</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>Mockups</span>
                  <span>1:25</span></button>
               </details>
               
           </div>
           <div className="px-5 w-[100%]">
                <details className="group">
                   <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
                    <div className="flex justify-between p-3">
                  <span className="text-[1.25em]">Course Overview - Start Here</span>
                  <span className="text-[1.25em]">6 lectures | 23 min</span>
                  </div>
                   <span className="transition group-open:rotate-180"></span>
                </summary>
                <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>Course Resources</span>
                  <span>0:25</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>Join Our Community!</span>
                  <span>0:07</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>App Overview</span>
                  <span>4:25</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>User Flow Walk Through</span>
                  <span>2:25</span></button>
                  <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                  <span>Mockups</span>
                  <span>1:25</span></button>
               </details>
               
           </div>
                </div>
            </div>
            <div className="mt-20 ml-20 mb-20">
              <h1 className="text-[2em] font-bold mb-5">Requirements</h1>
              <p className="mb-5 font-semibold">🎯 Basic understanding of Javascript, React, and Redux</p>
              <p className="mb-5 font-semibold">🎯 A Mac, Windows, or Linux computer</p>
            </div>
            <div className="ml-20 mb-20 w-[70%]">
              <h1 className="text-[2em] font-bold mb-5">Description</h1>
              <p className="mb-5">Note: This course assumes you've got the basics of React and Redux down. Check out my course 'Modern React with Redux', its the perfect preparation!Go beyond the basics of React and Redux! This course will teach you to combine the ultra-popular React, Redux, Express, and MongoDB technologies to build a fullstack web application. Advanced Deployment? You will learn it. Billing/Payments? Included. Handling Email? Of course!</p>
          <p className="mb-5 font-semibold">     ------------------------------</p> 
           <p className="mb-5"  > What Will You Build?</p>  
            <p className="mb-5">All of my courses are 'learn-by-doing': no boring endless lectures with Powerpoints, only live, interactive coding examples. In this course we'll build one massive web application that profiles the advanced features of React, Redux, Express, and Mongo. By putting each concept into a real app, you'll get a better idea of when to use each unique and powerful feature.</p>
            </div>
            <div className="ml-20 mb-20">
              <h1 className="text-[2em] font-bold mb-5">Students also bought</h1>
              <div className="flex space-x-10 w-[85%] p-3 mb-10 bg-zinc-300 bg-blend-difference shadow-2xl">
                <img src={courseThumb} alt="" />
                <div>
                  <h1 className="text-[1em] font-bold mb-5"> MERN Stack Course - MongoDB, Express,React and NodeJS</h1>
                  <p>⭐⭐⭐⭐ (40)</p>
                </div>
                <div>
                  <h1 className="text-[1em] font-bold mb-5 text-deepskyblue">599/-</h1>
                  <p>100</p>
                </div>
              </div>
              <div className="flex space-x-10 w-[85%] p-3 mb-10 bg-zinc-300 bg-blend-difference shadow-2xl">
                <img src={courseThumb} alt="" />
                <div>
                  <h1 className="text-[1em] font-bold mb-5"> MERN Stack Course - MongoDB, Express,React and NodeJS</h1>
                  <p>⭐⭐⭐⭐ (40)</p>
                </div>
                <div>
                  <h1 className="text-[1em] font-bold mb-5 text-deepskyblue">599/-</h1>
                  <p>100</p>
                </div>
              </div>

              
            </div>
            <div className="ml-20 mb-20">
              <h1 className="text-[2em] font-bold mb-5">Instructor</h1>
              <div className="flex space-x-4">
                <img src={instructor} alt="" />
                <div>
                  <h1 className="mb-2 font-semibold">Joe Patel</h1>
                  <p>Blockchain Dev</p>
                  <p>32 Courses</p>
                </div>
              </div>
              <p className="mt-10">Joe patel has been building complex Javascript front ends for top corporations in the San Francisco Bay Area. With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers. Invest in yourself by learning from Stephen's published courses.</p>
              <p className="mt-10 mb-5">⭐4.6 course rating  *15K ratings</p>
              <hr />
            </div>
            {/* <div>
              <div>
                <img src="" alt="" />
              </div>
              <div></div>
            </div> */}
          </div>
          {/* <div className="flex flex-col gap-8 w-full">
            <div className="pb-8 border-b-2 border-black border-dotted w-full flex flex-col gap-2">
              <div className="flex justify-between font-medium items-end">
                <h1 className="text-2xl">{courseInfo?.courseName}</h1>
                <p>{courseInfo?.shortdesc}y</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Created by {courseInfo?.author}</span>
                <span>Last Updated {courseInfo?.date}</span>
              </div>
            </div>
            <div className="py-4 flex flex-col gap-3">
              <h1 className="text-xl font-medium">What you will learn ?</h1>
              <div className="">{courseInfo?.longdesc}</div>
            </div>
          </div> */}
          <Card
            courseInfo={courseInfo}
            image={courseInfo?.imageurl}
            pricepshare={courseInfo?.price}
            totalshare={courseInfo?.price}
            dur={courseInfo?.duration}
            anum={courseInfo?.nofarticles}
            newClass="side3"
          />
        </section>
      </main>
    </>
  );
};

export default Course;
