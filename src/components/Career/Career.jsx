import React from "react";
import "./style.css";
import JobHeading from "../JobHeading/JobHeading";
import JobDetails from "../JobDetails/JobDetails";
import { motion } from "framer-motion";
import { fadeAnimateVariants, scaleAnimateVariants, slideAnimateVariants } from "../animate/animate";

const image =
  "https://generation-sessions.s3.amazonaws.com/2bb37f5cb66f51fbabc51797452dfcf7/img/explore-from-scrabble-blocks@2x.png";

export const Career = () => {
  return (
    <>
      <div
        className="mt-10 md:mx-auto mx-5 flex flex-col justify-center align-middle  md:w-2/3"
        style={{ maxWidth: "1065px" }}
      >
        <motion.div className="hero-rectangle rounded-xl overflow-hidden shadow-md p-4 md:flex" variants={slideAnimateVariants} initial="initial" whileInView="animate" viewport={{
          once: true,
        }} custom={1}>
          <div className="md:w-2/3 md:pr-4" >
            <h2 className="md:hero-heading text-xl  font-bold mb-2">Discover what's possible</h2>
            <p className="text-gray-600 mb-3 md:mb-0" >
              Let your heart take you to wherever you want to be. God gave you this gift of imagination. Use it. You can
              spend all day playing with mountains. And I know you're saying, 'Oh Bob, you've done it this time.' And
              you may be right. But we're not there yet.
            </p>
          </div>

          <div className="md:h-224">
            <img src={image} alt="Image" className="w-full h-auto md:rounded-xl" />
          </div>
        </motion.div>
      </div>

      <div className="md:mt-20 mt-8 flex-col items-center justify-center md:mx-auto md:w-2/3 mx-3">
        <motion.h2
          className="text-center md:text-[40px] text-xl break-keep"
          style={{ color: "black", fontWeight: "700", lineHeight: "50px" }}
          variants={scaleAnimateVariants} initial="initial" whileInView="animate" viewport={{
            once: true,
          }} custom={1}
        >
          Are you ready to kickstart you Web 3 career? Browse exciting job openings and apply now!
        </motion.h2>
        <div className="button-container flex justify-center items-center md:mt-10">
          <motion.button className="jobs-button mt-4 py-2 px-4 " variants={scaleAnimateVariants} initial="initial" whileInView="animate" viewport={{
            once: true,
          }} custom={3}>Apply Now</motion.button>
        </div>
      </div>

      <div className="mt-20 flex-col items-center justify-center md:mx-auto md:w-2/3 mx-5">
        <motion.h2 className="text-center md:text-[40px] text-[30px] " style={{ color: "black", fontWeight: "700" }} variants={fadeAnimateVariants} initial="initial" whileInView="animate" viewport={{
          once: true,
        }} custom={3} >
          Join DecentraSchool
        </motion.h2>
        <motion.div className="button-container flex justify-center items-center" variants={fadeAnimateVariants} initial="initial" whileInView="animate" viewport={{
          once: true,
        }} custom={4}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Develope a decentralized internet</p>
        </motion.div>
      </div>

      <div className="mt-10 mx-3 md:mx-auto  md:w-2/3" style={{ maxWidth: "1065px" }}>
        <div className="hero-rectangle rounded-xl overflow-hidden shadow-md p-4 md:flex flex-col">
          <JobHeading />
          <JobDetails />
          <JobHeading />
          <JobDetails />
          <JobDetails />
        </div>
      </div>

      <h2
        className="text-center md:visible hidden  mt-10 mx-5 break-keep"
        style={{ color: "black", fontWeight: "700", fontSize: "48px" }}
      >
        Got Questions ?
      </h2>
      <div className="md:flex md:visible hidden flex-col mt-10 mx-5">
        <div className="flex justify-evenly">
          <h2 style={{ fontSize: "32px", fontWeight: "700" }}>What is Web3</h2>
          <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Why choose Web3 jobs?</h2>
          <h2 style={{ fontSize: "32px", fontWeight: "700" }}>How do i apply</h2>
        </div>
        <div className="flex justify-center gap-10 my-5">
          <p className="w-1/4 text-left">
            Web 3 is the next generation internet, focusing on decentralization, privacy, and user empowerment. It’s
            powered by blockchain technology, creating a more open and transparent internet ecosystem.
          </p>
          <p className="w-1/4 text-center">
            Web 3 companies are shaping the future of the digital world. Working in this domain will provide you with
            growth opportunities, cutting-edge skill development, and a chance to make an impact on a global scale.
          </p>
          <p className="w-1/4 text-right">
            Click on the 'View Jobs' button and browse through the job listings. Follow the application instructions
            provided by each company and submit your application directly.
          </p>
        </div>
      </div>
    </>
  );
};
