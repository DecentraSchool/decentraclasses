import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import arrowDown from "./down-arrow.svg";
import { useLocation } from "react-router";
import { getCoursebyId } from "../../utils/PolybaseUtils";
const Courseplace = () => {
  const [courseInfo, setcourseInfo] = useState({});
  const [contentInfo, setcontentInfo] = useState([]);
  const [videoUrl, setvideoUrl] = useState("");
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const userId = query.get("userId");
  const courseId = query.get("courseId");
  const getCourseData = async () => {
    const data = await getCoursebyId(courseId);
    setcourseInfo(data.data);
    console.log(data.data);
    setcontentInfo(JSON.parse(data.data.courseContent));
    setvideoUrl(JSON.parse(data.data.courseContent).section[0]?.lecture[0].videoUrl);
    setvideoUrl(JSON.parse(data.data.content)[0].videoUrl);
  };

  useEffect(() => {
    getCourseData();
  }, [search]);

  console.log(contentInfo);
  return (
    <div className="flex justify-between ">
      <div className="w-[60%]  m-10">
        <div className=" flex h-[500px] justify-center align-middle bg-slate-300 mix-blend-multiply ">
          <ReactPlayer width="800px" height="100%" controls url={videoUrl} />
        </div>
        <div className="mt-10">
          <ul className="flex justify-between">
            <li>Overview</li>
            <li>Q&A</li>
            <li>Reviews</li>
          </ul>
          <hr />
          <h1 className="font-bold text-2xl mt-5 mb-5">About this course</h1>
          <p className="mb-5">
            Build a Full Stack Amazon Clone with Admin Panel using Flutter, Nodejs, Express & MongoDB
          </p>
          <h1 className="font-bold text-2xl mt-5 mb-5">Description</h1>
          <p className="mb-5">
            This is Flutter E-Commerce App with a Backend. This Shopping App uses Javascript, Node, Express, MongoDB,
            and Mongoose and is designed for beginners. This 12-hour course also covers Migration to Flutter 3 and a
            preview of the app with Material 3! This Flutter project covers the complete UI of Amazon including features
            like auth with email/password, cart, searching products, fetching them based on category, rating them,
            fetching deal of the day, checking out using GPay/Apple Pay, viewing the orders, the details of the order
            along with their status which can be changed from the admin panel, view total sales and graph of sales based
            on category.In this course, you'll learn to build the UI of Amazon from scratch, create REST APIs using
            Node, store data in MongoDB using Mongoose, use REST APIs with Flutter & Dart using Models, use the Flutter
            State Management tool as Provider and create a cross-platform app that works on Android and iOS.
          </p>
        </div>
      </div>
      <div className="w-[40%] h-full overflow-scroll ml-10 mt-10">
        <div className="w-[80%] bg-white h-[100vh]">
          <h1 className="font-bold text-2xl p-5">Course Content</h1>
          {contentInfo?.section?.map((s, index) => (
            <details key={s} className="group">
              <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="text-[1.25em] mb-2">
                      {index}-{s.title}
                    </div>
                    <img src={arrowDown} alt="down" width={20} />
                  </div>
                </div>
                <span className="transition group-open:rotate-180"></span>
              </summary>
              {s?.lecture?.map((l) => (
                <div className="mx-4">
                  <button
                    type="button"
                    onClick={() => setvideoUrl(l?.videoUrl)}
                    className="text-gray-900 text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    {l?.title}
                  </button>
                  <p>{l?.desc}</p>
                </div>
              ))}
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courseplace;