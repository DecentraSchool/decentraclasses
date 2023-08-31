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
    <div className="flex justify-between">
      <div className="w-[60%] m-10">
        <div className=" flex h-[500px] justify-center align-middle bg-slate-300 mix-blend-multiply py-5 ">
          <ReactPlayer width="800px" height="100%" controls url={videoUrl} />
        </div>
        <div className="mt-10">
          <ul className="flex justify-between">
            <li className="text-3xl font-bold mb-3">Overview</li>
            {/* <li>Q&A</li>
            <li>Reviews</li> */}
          </ul>
          <hr />
          <h1 className="font-bold text-2xl mt-5 mb-5">About this course</h1>
          <p className="mb-5">{courseInfo?.courseName}</p>
          <h1 className="font-bold text-2xl mt-5 mb-5">Description</h1>
          <p className="mb-5">{courseInfo?.longdesc}</p>
        </div>
      </div>
      <div className="w-[40%] h-full ml-10 mt-10">
        <div className="w-[80%]">
          <h1 className="font-bold text-xl p-5 ">Course Content</h1>
          {contentInfo?.section?.map((s, index) => (
            <details key={s} className="group mb-5 ">
              <summary className="font-medium cursor-pointer list-none text-black rounded-md focus:bg-slate-400 bg-white">
                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="text-[1.1em] mb-2">
                      {index+1}-{s.title}<br></br>
                    </div>
                    <img src={arrowDown} alt="down" width={20} />
                  </div>
                  <p className="text-sm">Duration - {s.totalDuration}</p>

                </div>
                <span className="transition group-open:rotate-180"></span>
              </summary>
              {s?.lecture?.map((l) => (
                <div className="bg-slate-200 w-[100%]">
                  <div className="flex items-center justify-around">
                  <input type="checkbox" name="status" id="status" className="text-green-500 p-2 rounded-sm focus:ring-0" />
                  <button
                    type="button"
                    onClick={() => setvideoUrl(l?.videoUrl)}
                    className="w-[80%] text-l text-gray-900  text-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-5 mt-2 mr-2 mb-2 dark:bg-gray-800 dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 items-center"
                  >
                    
                    {l?.title}
                  </button>
                  </div>
                  {l.desc===""? <p></p> :  <p className="p-4">{l?.desc}</p>}
                 
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
