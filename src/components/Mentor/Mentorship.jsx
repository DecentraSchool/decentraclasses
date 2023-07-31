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

export default function Mentorship() {
  const [noOfCourses, setnoOfCourses] = useState(0);
  const [courseData, setcourseData] = useState([]);
  const [loader, setloader] = useState(true);

  return (
    <div className="w-full flex-col h-full flex  items-center align-middle">
      <img src={meeting1} style={{ position: "absolute", left: "0", backgroundBlendMode: "lighten", opacity: "0.5" }} />
      <p style={{ fontSize: "25px", zIndex: "50" }} className="text-xl font-mono mt-12">
        Meet your Instructors/Mentors and join group sessions powered by{" "}
        <span style={{ textDecoration: "underline" }}>Huddle01</span>
      </p>
      <img
        className="mt-8"
        src={meeting2}
        style={{ position: "absolute", right: "0", backgroundBlendMode: "lighten", opacity: "0.5" }}
      />
      <div
        className="w-full m-32 h-full flex-wrap gap-10 flex justify-evenly items-center align-middle"
        style={{ display: "flex" }}
      >
        <MentorCard />
      </div>
    </div>
  );
}
