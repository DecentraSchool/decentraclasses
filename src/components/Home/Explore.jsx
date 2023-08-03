import React from "react";
import { motion } from "framer-motion";
import "./Explore.css";
export default function Explore() {
  return (
    <div className="md:flex gap-16 px-10 justify-between overflow-x-hidden">
      <div className=" md:w-3/5 md:flex md:flex-col md:justify-around md:items-start">
        <div>
          <h1 className="text-[1.5em] my-10 linear-wipe text font-extrabold md:text-[43px] break-keep md:leading-tight">
            "Unlock Your Potential with Earn Excel: The Premier Web 3.0 Online Learning Platform"
          </h1>
          <p className="break-keep">
            Welcome to Earn Excel, the ultimate destination for online learning in the Web 3.0 era. Our mission is to
            help you unlock your full potential by providing access to a diverse range of high-quality courses, expert
            instructors, and an engaging, interactive learning environment.
          </p>
        </div>
        <button type="button" className="bg-[#F9A825] hover:bg-[#f5b44b] md:min-w-fit px-8 py-2 rounded-full my-10">
          Explore Courses
        </button>
      </div>
      <div className="hidden md:w-3/4 md:vert-move md:block">
        <img src="/images/exploreC.png" alt="" className="w-full vert-move" />
      </div>
    </div>
  );
}
