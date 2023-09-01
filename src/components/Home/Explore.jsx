import React from "react";
import { motion } from "framer-motion";
import "./Explore.css";
import DCls from "../../assets/Decentraclasses.webp";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="md:flex mx-2 md:gap-20 md:px-10 md:justify-between overflow-x-hidden mt-10">
    <div className=" md:w-[55%] md:flex md:flex-col md:justify-around md:items-start">
      <div>
        <h1 className="text-[1.5em] w-[100%] my-8 linear-wipe text font-extrabold md:text-[40px] break-keep md:leading-tight">
          Embrace the Future of Learning: Welcome to our Decentralized Ed-Tech Revolution!
        </h1>
        <p className="break-keep text-l">
        DecentraClasses: Learn, Earn, and Stake for a Decentralized Education Revolution. Discover a new era of knowledge-sharing where education becomes an asset and learning transforms into earning.
        </p>
      </div>
      <Link className="w-full my-20" to={"/courses"}>
        <button type="button" className="bg-[#F9A825] hover:bg-[#f5b44b] md:min-w-fit px-8 py-2 rounded-full my-10">
          Explore Courses
        </button>
      </Link>
    </div>
    <div className="mt-10 md:w-[45%] md:vert-move md:block md:mt-20 md:justify-center">
      <img src={DCls} alt="" className="w-[60%] vert-move mx-auto md:ml-[30%]" />
    </div>
  </div>
  );
}
