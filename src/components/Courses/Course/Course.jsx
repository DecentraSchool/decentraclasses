import React, { useState, useEffect, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";
import bigNumberToString from "bignumber-to-string";
import { getCoursebyId, getInstructorById } from "../../../utils/PolybaseUtils";
import courseThumb from "../course-thumb.png";
import instructor from "../instructor.png";
import InstructorCard from "./InstructorCard.jsx";
import arrowDown from "../../Courseplace/down-arrow.svg";
import like from "../../../assets/like.svg";
import dislike from "../../../assets/dislike.svg";
import reviewDp from "../../../assets/review-dp.svg";
import { ParentContext } from "../../../contexts/ParentContext";
import Stripe from "../../Stripe/Stripe";

const Course = ({}) => {
  const [courseInfo, setcourseInfo] = useState({});
  const [instructorInfo, setinstructorInfo] = useState({});
  const [contentInfo, setcontentInfo] = useState([]);
  const { courseBought, setcourseBought } = useContext(ParentContext);
  const { id } = useParams();
  const getCourseData = async () => {
    const data = await getCoursebyId(id);
    setcourseInfo(data.data ? data.data : {});
    setcontentInfo(data.data.courseContent ? JSON.parse(data.data.courseContent) : {});
    const instructor = await getInstructorById(data?.data?.instructor?.id);
    console.log(instructor?.data);
    setinstructorInfo(instructor.data);
    // console.log(instructorInfo);
  };

  useEffect(() => {
    getCourseData();
  }, [courseBought]);
  // console.log(instructorInfo);

  return (
    <>
      <main>
        <section className="break-keep pb-20 lg:flex mt-10 flex lg:flex-row flex-col-reverse  mx-10 gap-8 justify-between overflow-x-hidden">
          <div className="md:flex md:flex-col lg:w-[70%]">
            {/* Title Card  */}
            <div className="h-[35%] bg-cyan-900 p-5 rounded-lg text-white">
              <p className="text-blue-400 mb-5">{courseInfo?.category}</p>
              <h1 className="text-[1.25em] md:text-[2em] font-bold mb-5">{courseInfo?.courseName} 🚀</h1>
              <p className="mb-5">
                Created By <p className="text-xl rounded-xl text-yellow-300">{instructorInfo?.name}</p>{" "}
              </p>
              <p className="mb-5">4 ⭐⭐⭐⭐ </p>
              <p className="mb-5">Last Updated {courseInfo.date} </p>
            </div>
            <div className="mt-10 md:ml-20">
              <h1 className="text-[2em] font-bold mb-5">What you'll learn</h1>
              <div className="md:w-[80%]">
                {courseInfo?.whatyllearn?.map((e) => (
                  <p className="mb-5 font-semibold">🎯{e}</p>
                ))}
              </div>
            </div>

            <div className="mt-20 md:ml-20 mb-20">
              <h1 className="text-[2em] font-bold mb-5">Requirements</h1>
              {courseInfo?.requirements?.map((e) => (
                <p className="mb-5 font-semibold">🎯{e}</p>
              ))}
            </div>
            <div className="md:ml-20 mb-20 md:w-[70%]">
              <h1 className="text-[2em] font-bold mb-5">Description</h1>
              <p className="mb-5 break-keep">{courseInfo?.longdesc}</p>
              {/* <p className="mb-5 font-semibold"> ------------------------------</p>
              <p className="mb-5"> What Will You Build?</p>
              <p className="mb-5">
                All of my courses are 'learn-by-doing': no boring endless lectures with Powerpoints, only live,
                interactive coding examples. In this course we'll build one massive web application that profiles the
                advanced features of React, Redux, Express, and Mongo. By putting each concept into a real app, you'll
                get a better idea of when to use each unique and powerful feature.
              </p> */}
            </div>

            <InstructorCard instructorInfo={instructorInfo} />
          </div>

          <Card
            courseInfo={courseInfo}
            courseBought={courseBought}
            setcourseBought={setcourseBought}
            image={courseInfo?.imageurl}
            pricepshare={courseInfo?.price}
            totalshare={courseInfo?.price}
            dur={courseInfo?.duration}
            anum={courseInfo?.nofarticles}
            newClass="side3 lg:w-[30%] w-full"
          />
        </section>
      </main>

      <Stripe />
    </>
  );
};

export default Course;

//* ALSO BOUGHT SECTION
{
  /* <div className="md:ml-20 mb-20">
              <h1 className="md:text-[2em] font-bold mb-5">Students also bought</h1>
              <div className="md:flex md:space-x-10 md:w-[85%] p-3 mb-10 bg-zinc-300 bg-blend-difference shadow-2xl">
                <img src={courseThumb} alt="" className="hidden md:block" />
                <div>
                  <h1 className="text-[1em] font-bold mb-5"> MERN Stack Course - MongoDB, Express,React and NodeJS</h1>
                  <p>⭐⭐⭐⭐ (40)</p>
                </div>
                <div>
                  <h1 className="text-[1em] font-bold mb-5 text-deepskyblue">599/-</h1>
                  <p>100</p>
                </div>
              </div>
              <div className="md:flex md:space-x-10 md:w-[85%] p-3 mb-10 bg-zinc-300 bg-blend-difference shadow-2xl">
                <img src={courseThumb} alt="" className="hidden md:block" />
                <div>
                  <h1 className="text-[1em] font-bold mb-5"> MERN Stack Course - MongoDB, Express,React and NodeJS</h1>
                  <p>⭐⭐⭐⭐ (40)</p>
                </div>
                <div>
                  <h1 className="text-[1em] font-bold mb-5 text-deepskyblue">599/-</h1>
                  <p>100</p>
                </div>
              </div>
            </div> */
}

// * REVIEW SECTION
{
  /* <div className="flex">
              <div className="ml-20">
                <div className="flex space-x-5">
                  <img src={reviewDp} alt="" />
                  <div className="flex-col align-middle">
                    <h1 className="text-2xl font-bold mt-5">Review 1</h1>
                    <p className="mb-5">⭐⭐⭐⭐ (1 month ago)</p>
                  </div>
                </div>

                <p className="mb-5">
                  Its very nice tutorial.If it has included DB data access that would be great for basic learings to
                  advanced as title stating.
                </p>
                <div className="flex space-x-5">
                  <span>Helpful?</span>
                  <span className="flex w-[5%] justify-evenly">
                    <img src={like} alt="" />1
                  </span>
                  <span className="flex w-[5%] justify-evenly">
                    <img src={dislike} alt="" />0
                  </span>
                </div>
              </div>
              <div className="ml-20">
                <div className="flex space-x-5">
                  <img src={reviewDp} alt="" />
                  <div className="flex-col align-middle">
                    <h1 className="text-2xl font-bold mt-5">Review 1</h1>
                    <p className="mb-5">⭐⭐⭐⭐ (1 month ago)</p>
                  </div>
                </div>

                <p className="mb-5">
                  Its very nice tutorial.If it has included DB data access that would be great for basic learings to
                  advanced as title stating.
                </p>
                <div className="flex space-x-5">
                  <span>Helpful?</span>
                  <span className="flex w-[5%] justify-evenly">
                    <img src={like} alt="" />1
                  </span>
                  <span className="flex w-[5%] justify-evenly">
                    <img src={dislike} alt="" />0
                  </span>
                </div>
              </div>
            </div> */
}

// <div className="mt-10 md:ml-20 mb-20">
// <h1 className="text-[2em] font-bold mb-5">Course Content</h1>
// <p className="mb-5">
//   <span>{courseInfo.nofarticles} sections </span> • <span>Comprehensive lectures</span> •{" "}
//   <span>{courseInfo?.duration} hrs total length</span>
// </p>

// <div className="w-[80%] h-[100%] bg-cyan-900 rounded-lg">
//   {/* Accordion */}

//   <div className="px-5 py-5 w-[100%]">
//     <details className="group">
//       <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
//         <div className="flex justify-between p-3">
//           <span>
//             <img src={arrowDown} alt="" width={30} />
//           </span>
//           <span className="text-[1.25em]">Course Overview - Start Here</span>
//           <span className="text-[1.25em]">6 lectures | 23 min</span>
//         </div>
//         <span className="transition group-open:rotate-180"></span>
//       </summary>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>Course Resources</span>
//         <span>0:25</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>Join Our Community!</span>
//         <span>0:07</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>App Overview</span>
//         <span>4:25</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>User Flow Walk Through</span>
//         <span>2:25</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>Mockups</span>
//         <span>1:25</span>
//       </button>
//     </details>
//   </div>
//   <div className="px-5 w-[100%]">
//     <details className="group">
//       <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
//         <div className="flex justify-between p-3">
//           <span>
//             <img src={arrowDown} alt="" width={30} />
//           </span>
//           <span className="text-[1.25em]">Course Overview - Start Here</span>
//           <span className="text-[1.25em]">6 lectures | 23 min</span>
//         </div>
//         <span className="transition group-open:rotate-180"></span>
//       </summary>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>Course Resources</span>
//         <span>0:25</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>Join Our Community!</span>
//         <span>0:07</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>App Overview</span>
//         <span>4:25</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>User Flow Walk Through</span>
//         <span>2:25</span>
//       </button>
//       <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
//         <span>Mockups</span>
//         <span>1:25</span>
//       </button>
//     </details>
//   </div>
// </div>
// </div>
