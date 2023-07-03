import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Card from "./Card";
import { useLocation, useParams } from "react-router-dom";
import bigNumberToString from "bignumber-to-string";
const Course = () => {
  const location = useLocation();
  
  let courseInfo;
  let price;
  let total;
  // const [courseInfo, setcourseInfo] = useState();
  courseInfo = location.state.course;
  price = location.state.price;
  total = location.state.total;

  return (
    <>

      <main>
        <section className="pb-20 flex  mx-28 gap-16 justify-between">
          <div className="flex flex-col gap-8 w-full">
            <div className="pb-8 border-b-2 border-black border-dotted w-full flex flex-col gap-2">
              <div className="flex justify-between font-medium items-end">
                <h1 className="text-2xl">{courseInfo[4]?.courseName}</h1>
                <p>{courseInfo[4]?.shortdesc}y</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Created by {courseInfo[4]?.author}</span>
                <span>Last Updated {courseInfo[4]?.date}</span>
              </div>
            </div>
            <div className="py-4 flex flex-col gap-3">
              <h1 className="text-xl font-medium">What you will learn ?</h1>
              <div className="">{courseInfo[4]?.longdesc}</div>
            </div>
          </div>
          <Card
            courseInfo={courseInfo}
            image={courseInfo[4]?.imageurl}
            pricepshare={price}
            totalshare={total}
            dur={courseInfo[4]?.duration}
            anum={courseInfo[4]?.nofarticles}
            newClass="side3"
          />
        </section>
      </main>
    </>
  );
};

export default Course;
