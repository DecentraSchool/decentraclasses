import React from "react";
import Courses1 from "../Courses/Courses.jsx";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="px-10">
      <div className="m-20 flex flex-col items-center ">
        <h1 className="font-bold text-3xl">Courses</h1>
        <div className="flex items-center">
          
          <div className="w-full">
            <Courses1 />
            <Link className="w-full flex justify-center" to={"/courses"}>
              <button
                type="button"
                className="bg-[#F9A825] hover:bg-[#f5b44b] md:w-[30%] px-8 py-2 rounded-full mb-10"
              >
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
