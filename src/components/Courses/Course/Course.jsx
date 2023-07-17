import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";
import bigNumberToString from "bignumber-to-string";
import { getCoursebyId } from "../../../utils/PolybaseUtils";
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
        <section className="pb-20 flex  mx-28 gap-16 justify-between">
          <div className="flex flex-col gap-8 w-full">
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
          </div>
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
