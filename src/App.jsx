import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Course from "./components/Courses/Course/Course";
import Communtiy from "./components/Community/Communtiy";
import { Career } from "./components/Career/Career";
import Footer from "./components/Footer";
import { ethers } from "ethers";
import Dash from "./components/Dash/Dash";
import { getAccount } from "@wagmi/core";
import Header from "./components/Home/Header";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import StudentCourses from "./components/StudentDashboard/StudentCourses";
import CoursePayment from "./components/Courses/CoursePayment";

import PolybaseHook from "./components/polybase/Polybase";
import Workplace from "./components/WorkPlace/Workplace";
import LightHouseUtils from "./utils/LightHouseUtils";
import Mentorship from "./components/Mentor/Mentorship";
import Courseplace from "./components/Courseplace/Courseplace";
import Announcment from "./components/Announcment";
import Success from "./components/Stripe/Success";
import FAQhome from "./components/Home/FAQhome";
import CreateMeetings from "./components/HuddleSpaces/CreateMeetings";
import Meetups from "./components/HuddleSpaces/Meetups";
import CotiMeeting from "./components/HuddleSpaces/coti/CotiMeeting";

function App() {
  const chainID = 80001;
  const [account, setAccount] = useState(null);
  const coursesRef = useRef(null);

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };


  return (
    <>
      {/* <Announcment text="Phase 1 is now available🔥🎊!!! Check out our platform and the free courses we offer on it🎯 !" /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poly" element={<PolybaseHook />} />
        <Route path="/community" element={<Communtiy />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/studentcourses" element={<StudentCourses />} />
        <Route path="/pay" element={<CoursePayment />} />
        {/* <Route path="/workplace" element={<Workplace />} /> */}
        <Route path="/light" element={<LightHouseUtils />} />
        <Route path="/Mentor" element={<Mentorship />} />
        <Route path="/workplace" element={<Courseplace />} />
        <Route path="/stripe/success" element={<Success />} />
        <Route path="/FAQhome" element={<FAQhome />} />
        <Route path="/generateRoom" element={<CreateMeetings />} />
        <Route path="/joinRoom/:id" element={<Meetups />} />
        <Route path="/coti/joinRoom/qid-hkpt-jgn" element={<CotiMeeting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
