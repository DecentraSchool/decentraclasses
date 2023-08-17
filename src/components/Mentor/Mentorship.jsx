import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../contractABI";
import axios from "axios";
import SkeletonLoader from "../Courses/SkeletonLoader";
import { Toaster, toast } from "react-hot-toast";
import Confetti from "react-confetti";
import { getContract, getWalletClient } from "@wagmi/core";
import { useContractRead, useContractReads } from "wagmi";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { getAllCourses } from "../../utils/PolybaseUtils";
import { MentorCard } from "./MentorCard";
import meeting1 from "../../assets/meeting.png";
import meeting2 from "../../assets/meeting2.png";
import instructor1 from "../../assets/instructor1.jpg";
import instructor2 from "../../assets/instructor2.jpg";
import { motion } from "framer-motion";
import { slideAnimateVariants } from "../animate/animate";

import inst3 from "../../assets/inst3.png";
import inst4 from "../../assets/inst4.png";
import inst5 from "../../assets/inst5.jpg";
import inst6 from "../../assets/inst6.jpg";
import inst7 from "../../assets/inst7.jpg";

export default function Mentorship() {
  const [noOfCourses, setnoOfCourses] = useState(0);
  const [courseData, setcourseData] = useState([]);
  const [loader, setloader] = useState(true);

  return (
    <div className="w-full flex-col h-full flex  items-center align-middle">
      <img src={meeting1} style={{ position: "absolute", left: "0", backgroundBlendMode: "lighten", opacity: "0.5" }} />

      <motion.p
        style={{ fontSize: "25px", zIndex: "50" }}
        className="text-xl font-mono mt-12 p-5 mx-3 mentor-p"
        variants={slideAnimateVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={1}
      >

        Meet your Instructors/Mentors and join group sessions powered by{" "}
        <a href="https://huddle01.com/" target="_blank" style={{ textDecoration: "underline" }}>
          Huddle01 🚀
        </a>
      </motion.p>
      <img
        className="mt-8"
        src={meeting2}
        style={{ position: "absolute", right: "0", backgroundBlendMode: "lighten", opacity: "0.5" }}
      />
      <div
        className="w-full m-32  flex-wrap gap-10 flex justify-evenly items-center align-middle"
        style={{ display: "flex" }}
      >
        <MentorCard
          name={"Atharva Akshat"}
          title={"Python specialist"}
          session_name={"AMA session"}
          date={"05 August 2023 - 3pm IST"}
          info={
            "Meet Atharva Akshat, your Python specialist! With over half a year of hands-on experience mastering Python's power, I bring a wealth of knowledge to our team. My expertise goes beyond development – they are also a seasoned instructor, making complex concepts easy to grasp for learners of all levels."
          }
          portfolio={"/"}
          img={instructor1}

     value = {3}

        />
        <MentorCard
          title={"Web/App Developer"}
          name={"Jaskirat Singh"}
          img={instructor2}
          session_name={"Lets chat"}
          date={"10 August 2023 - 1pm IST"}
          portfolio={"jaskirat.me"}
          info={
            "Meet Jaskirat Singh, your blockchain educator and guide into the fascinating world of decentralized technologies! With a deep passion for blockchain, I have dedicated 1.5 years to mastering this groundbreaking technology. As a seasoned developer and educator, I simplify complex concepts, making them accessible to learners of all backgrounds."
          }
          value={5}
        />
        <MentorCard
          title={"Video Editor"}
          name={"Manas Pathak"}
          img={inst3}
          session_name={"AMA session"}
          date={"15 August 2023 - 2pm IST"}
          portfolio={"/"}
          info={
            "Hey, I'm Manas Pathak, a video editing maestro with 1.5 years of experience. I love crafting cinematic masterpieces that captivate audiences. Join me on this exciting journey through the world of video editing, where we'll unlock the full potential of visual storytelling together! Let's get started and create magic with our videos!"
          }
          value={3}
        />
        <MentorCard
          title={"Software Developer"}
          name={"Harsh"}
          img={inst4}
          session_name={"Live class"}
          date={"18 August 2023 - 1pm IST"}
          portfolio={"/"}
          info={
            "A dynamic and enthusiastic individual with a proven track record of delivering high quality content around Data Science, Machine Learning, Deep Learning, Web 3.0 and Programming in general. "
          }
          value={5}
        />
        <MentorCard
          title={"UI/UX Designer"}
          name={"Preet Patel"}
          img={inst5}
          session_name={"Hands-on class"}
          date={"11 August 2023 - 1pm IST"}
          portfolio={"/"}
          info={
            "Hey, I am Preet Patel. I am UI/UX designer. UI/UX designer is a budding creative force in the dynamic realm of user interface and user experience design. Armed with a fresh perspective and a natural affinity for technology, this young designer possesses a unique ability to bridge the gap between contemporary design trends and the preferences of their generation."
          }
          value={5}
        />
        <MentorCard
          title={"Blockchain Enthusiast, Entrepreneur & Author"}
          name={"Alofe Oluwafemi"}
          img={inst6}
          session_name={"Learn Ethereum Programming"}
          date={"20 August 2023 - 2 PM IST"}
          portfolio={"/"}
          info={
            "Oluwafemi is the Founder and Chief Technology Officer of a Fintech Startup-Corprenuer. A Financial lifestyle app for millennials that allows you to save, invest, and grow your business securely. With over 20 000 users who enjoy 18% - 24% interest on their savings and investment, it also provides business owners efficient and practical tools to help manage and reach more customers seamlessly."
          }
          value={5}
        />
        <MentorCard
          title={"Software Engineer"}
          name={"Faraz Rawala"}
          img={inst7}
          session_name={"ChatGPT masterclass"}
          date={"21 August 2023 - 1pm IST"}
          portfolio={"/"}
          info={
            "Hi there! My name is Faraz Rawala, and I am a 32-year-old software engineer with seven years of experience in the field. Throughout my career, I have gained valuable knowledge and experience in the digital market and have successfully applied it to my work. Now, I am excited to share my expertise with others and help them get started in this dynamic and exciting field. Join me as we explore the world of internet marketing and discover all that it has to offer."
          }
          value={5}
        />
      </div>
    </div>
  );
}
