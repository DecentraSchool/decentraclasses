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
import Course from "./Course/Course";

export default function Courses() {
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
                <h1 className="text-[2.5rem] font-bold">A broad selection of courses</h1>
                <p className="text-xl ">
                  Intresting videos with all the information you need to get started in the world of web3 and blockchain
                </p>
              </div>
              {loader && <SkeletonLoader></SkeletonLoader>}
              <div className="p-8 grid justify-center grid-cols-2 grid-flow-row gap-16 py-16 ">
                {loader == false &&
                  courseData.map((course) => {
                    return (
                      <div className="h-96 flex flex-col justify-start w-96">
                        <div className="w-50 h-50">
                          <LazyLoadImage
                            alt=""
                            style={{ height: "220px", width: "100%" }}
                            src={course?.imageurl}
                            className="w-50 h-50"
                          />
                        </div>
                        <div className="flex flex-col text-white gap-4 p-8 bg-black">
                          <p className="text-xl">{course.courseName}</p>
                          <p className="leading-tight">{course.shortdesc}</p>
                          <button className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-3 font-medium shadow-md">
                            <Link to={`/course/${course.id}`}>Start Course</Link>
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
