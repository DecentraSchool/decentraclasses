import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getCoursebyId } from "../../utils/PolybaseUtils";
import { useLocation, useParams } from "react-router-dom";

const Workplace = () => {
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
    setcontentInfo(JSON.parse(data.data.content));
    setvideoUrl(JSON.parse(data.data.content)[0].videoUrl);
  };

  useEffect(() => {
    getCourseData();
  }, [search]);

  return (
    <div>
      <div className="my-10">
        <div className="flex w-full h-full justify-around align-middle mb-32">
          <ReactPlayer url={videoUrl} />
          <div className="flex flex-col justify-between w-[30%] h-[100%] bg-[#2D3E50] text-white p-6 rounded-lg">
            <h1 className="py-3 font-bold">Course Playlist</h1>
            {contentInfo?.map((content, index) => (
              <button
                onClick={() => setvideoUrl(content.videoUrl)}
                className="hover:bg-sky-500  bg-white text-black w-[100%] h-[50px] rounded-lg text-left p-3 my-3"
              >
                {index + 1}.{content.title}
              </button>
            ))}
          </div>
        </div>
        <div className=" relative w-[50%] h-[50px] bg-[#2D3E50] left-[5%] flex justify-around align-center rounded-lg">
          <input type="text" className="w-[80%] h-[70%] my-2 rounded-lg"></input>
          <button className="text-white">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Workplace;
