import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../contractABI";
import axios from "axios";
import SkeletonLoader from "./SkeletonLoader";
import { Toaster, toast } from "react-hot-toast";
import Confetti from "react-confetti";
import { getContract, getWalletClient } from "@wagmi/core";
import { useContractRead, useContractReads } from "wagmi";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { getAllCourses } from "../../utils/PolybaseUtils";

export default function Mentorship() {
  const [noOfCourses, setnoOfCourses] = useState(0);
  const [courseData, setcourseData] = useState([]);
  const [loader, setloader] = useState(true);

  const getCourseData = async () => {
    setloader(true);
    const data = await getAllCourses();
    let arr = [];
    data.forEach((d) => {
      arr.push(d.data);
    });
    setcourseData(arr);
    setloader(false);
  };

  useEffect(() => {
    getCourseData();
  }, []);

  // const WagmiContract = {
  //   address: contractAddress,
  //   abi: contractABI,
  // };

  // const {
  //   data: totalCourses,
  //   isError,
  //   isLoading: isTotalLoading,
  // } = useContractRead({
  //   ...WagmiContract,
  //   functionName: "totalCourses",
  // });

  // let arr = [];

  // for (let i = 0; i < Number(totalCourses); i++) {
  //   arr.push({ ...WagmiContract, functionName: "courses", args: [i] });
  // }
  // // console.log(arr);
  // const {
  //   data: courses,
  //   isCourseError,
  //   isLoading: isCourseLoading,
  //   isSuccess,
  // } = useContractReads({
  //   contracts: arr,
  //   watch: true,
  //   cacheTime: 5_000,
  //   onSuccess(data) {
  //     let dummyCourse = [];
  //     data.map(async (c) => {
  //       dummyCourse.push(c.result);
  //       setcourseData(dummyCourse);
  //       await getCourseMata();
  //     });
  //     setloader(false);
  //   },
  // });

  // const getCourseMata = async () => {
  //   let data = [];
  //   courseData.forEach(async (course, index) => {
  //     console.log(course[1]);
  //     const res = await axios.get(`https://decentraschool.infura-ipfs.io/ipfs/${course[1]}`);
  //     console.log(res.data);
  //     data[index] = [...course, res.data];
  //     console.log(data);
  //     setcourseData(data);
  //   });
  // };

  return (
    <div className="flex  justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-[1440px]">
        {/* <Header /> */}
        <main>
          <section className="px-10 flex flex-col gap-24 pb-20">
            <div className="">
              <div className="flex flex-col text-center p-8">
                <h1 className="text-[2.5rem] font-bold" style={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>Connect to your Mentors through Huddle01🚀</h1>
                <p className="text-xl " style={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>
                  Lookout for group sessions with your favourite mentors - just rsvp and we would send you the meet link{" "}
                </p>
              </div>
              {loader && <SkeletonLoader></SkeletonLoader>}
              <div className="p-8 grid justify-center grid-cols-1 md:grid-cols-2 grid-flow-row gap-16 py-16 ">
                <div className="h-96 flex flex-col  justify-start w-96 mx-auto md:mx-0 mt-10">
                  <div className="w-30 h-60">
                    <LazyLoadImage
                      alt=""
                      style={{ height: "300px", width: "100%" }}
                      src="https://images.pexels.com/photos/6325988/pexels-photo-6325988.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="w-40 h-50"
                    />
                  </div>
                  <div className="flex flex-col text-white gap-4 p-8 bg-black">
                    <p className="text-xl">Raghav Jindal</p>
                    <p className="leading-tight">Blockchain developer at quillaudit</p>
                    <p className="leading-tight">AMA session at 30/7/2023 2pm</p>
                    <button className="bg-yellow-400 text-black py-2 px-3 font-medium shadow-md">
                      <p to={`/course/${""}`}>RSVP</p>
                    </button>
                  </div>
                </div>
                <div className="h-96 flex flex-col justify-start w-96 mx-auto md:mx-0 mt-10">
                  <div className="w-30 h-60">
                    <LazyLoadImage
                      alt=""
                      style={{ height: "300px", width: "100%" }}
                      src="https://images.pexels.com/photos/9064302/pexels-photo-9064302.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="w-40 h-50"
                    />
                  </div>
                  <div className="flex flex-col text-white gap-4 p-8 bg-black">
                    <p className="text-xl">Aryan Ghosh</p>
                    <p className="leading-tight">Python developer</p>
                    <p className="leading-tight">Group chat session at 5/8/2023 3pm</p>
                    <button className="bg-yellow-400 text-black py-2 px-3 font-medium shadow-md">
                      <p to={`/course/${""}`}>RSVP</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
