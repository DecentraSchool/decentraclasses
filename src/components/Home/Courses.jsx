import React from "react";
import Courses1 from "../Courses/Courses.jsx";

export default function Courses() {
  return (
    <div className="px-10">
      <div className="m-20 flex flex-col gap-20 items-center ">
        <h1 className="font-bold text-2xl">Courses</h1>
        <div className="flex  flex-col gap-16 items-center justify-center">
          {/* <div className="flex gap-20">
            <div className=" w-min flex flex-col gap-5 items-center text-center p-5 rounded-3xl bg-gray-300 shadow-sm shadow-black">
              <img src="/images/clip.png" alt="" className="max-w-[250px]" />
              <p>Write Your First Smart Contract on Flow Blockchain</p>
              <button type="button" className="bg-[#F9A825] px-4 font-semibold py-2 rounded-full">
                Take Courses
              </button>
            </div>
            <div className=" w-min flex flex-col gap-5 items-center text-center p-5 rounded-3xl bg-gray-300 shadow-sm shadow-black">
              <img src="/images/clip3.png" alt="" className="max-w-[250px]" />
              <p>Write Your First Smart Contract on Flow Blockchain</p>
              <button type="button" className="bg-[#F9A825] px-4 font-semibold py-2 rounded-full">
                Take Courses
              </button>
            </div>
            <div className=" w-min flex flex-col gap-5 items-center text-center p-5 rounded-3xl bg-gray-300 shadow-sm shadow-black">
              <img src="/images/clip4.png" alt="" className="max-w-[250px]" />
              <p>Write Your First Smart Contract on Flow Blockchain</p>
              <button type="button" className="bg-[#F9A825] px-4 font-semibold py-2 rounded-full">
                Take Courses
              </button>
            </div>
          </div> */}
          <div>
            <Courses1 />
            <button type="button" className="bg-[#F9A825] hover:bg-[#f5b44b] min-w-fit px-8 py-2    rounded-full ">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
