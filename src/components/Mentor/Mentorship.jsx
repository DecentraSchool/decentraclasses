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
import instructor3 from "../../assets/instructor3.jpg";
import instructor4 from "../../assets/instructor4.jpg";
import instructor5 from "../../assets/instructor5.jpg";

export default function Mentorship() {
  const [noOfCourses, setnoOfCourses] = useState(0);
  const [courseData, setcourseData] = useState([]);
  const [loader, setloader] = useState(true);

  return (
    <div className="w-full flex-col h-full flex  items-center align-middle">
      <img src={meeting1} style={{ position: "absolute", left: "0", backgroundBlendMode: "lighten", opacity: "0.5" }} />
      <p style={{ fontSize: "25px", zIndex: "50" }} className="text-xl font-mono mt-12 p-5 mx-3 mentor-p">
        Meet your Instructors/Mentors and join group sessions powered by{" "}
        <a href="https://huddle01.com/" target="_blank" style={{ textDecoration: "underline" }}>
          Huddle01 🚀
        </a>
      </p>
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
            "Meet Atharva Akshat, your Python specialist! With over half a year of hands-on experience mastering Python's power, I bring a wealth of knowledge to our team. My expertise goes beyond development – they are also a seasoned instructor, making complex concepts easy to grasp for learners of all levels. Embrace the Python journey with me, and together, let's unlock the full potential of this incredible programming language!"
          }
          portfolio={"/"}
          img={instructor1}
        />
        <MentorCard
          title={"Web/App Developer"}
          name={"Jaskirat Singh"}
          img={instructor2}
          session_name={"Lets chat"}
          date={"10 August 2023 - 1pm IST"}
          portfolio={"jaskirat.me"}
          info={
            "Meet Jaskirat Singh, your blockchain educator and guide into the fascinating world of decentralized technologies! With a deep passion for blockchain, I have dedicated 1.5 years to mastering this groundbreaking technology. As a seasoned developer and educator, I simplify complex concepts, making them accessible to learners of all backgrounds. Join me in the Blockchain Basics course and embark on a transformative experience, understanding the foundational principles, grasping fundamental building blocks, and applying this knowledge to shape a decentralized future—one block at a time!"
          }
        />
        <MentorCard
          title={"UI/UX Designer"}
          name={"Preeth Patel"}
          img={instructor3}
          session_name={"Let's chat"}
          date={""}
          portfolio={"/"}
          info={
            "Meet Preet Patel, your UI/UX educator.UI/UX designer is a budding creative force in the dynamic realm of user interface and user experience design. Armed with a fresh perspective and a natural affinity for technology, this young designer possesses a unique ability to bridge the gap between contemporary design trends and the preferences of their generation. With an innate understanding of digital interactions and a passion for crafting seamless user experiences, the teenage UI/UX designer fearlessly explores innovative design concepts, unafraid to challenge conventions and reimagine the ways users engage with technology. Their enthusiasm, combined with a willingness to learn and adapt, propels them to make meaningful contributions to the world of design, promising a future where user-centric digital interfaces thrive under their skillful guidance."
          }
        />
        <MentorCard
          title={"Machine learning programmer"}
          name={"Harsh"}
          img={instructor4}
          session_name={"Let's chat"}
          date={""}
          portfolio={"/"}
          info={
            "Meet Harsh, A dynamic and enthusiastic individual with a proven track record of delivering high quality content around Data Science, Machine Learning, Deep Learning, Web 3.0 and Programming in general. "
          }
        />
        <MentorCard
          title={"Video Editor"}
          name={"Manas Pathak"}
          img={instructor5}
          session_name={"Let's chat"}
          date={""}
          portfolio={"/"}
          info={
            "Meet Manas Pathak, a video editing maestro with 1.5 years of experience. I love crafting cinematic masterpieces that captivate audiences. Join me on this exciting journey through the world of video editing, where we'll unlock the full potential of visual storytelling together! Let's get started and create magic with our videos!"
          }
        />
      </div>
    </div>
  );
}
