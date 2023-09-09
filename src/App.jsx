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


function App() {
  const chainID = 80001;
  const [account, setAccount] = useState(null);
  const coursesRef = useRef(null);

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };



  // useEffect(() => {
  //   connectHandler();
  //   if (window.ethereum.networkVersion !== chainID) {
  //     try {
  //       window.ethereum.request({
  //         method: "wallet_switchEthereumChain",
  //         params: [{ chainId: ethers.utils.toHex(chainID) }],
  //       });
  //     } catch (err) {
  //       // This error code indicates that the chain has not been added to MetaMask
  //       if (err.code === 4902) {
  //         window.ethereum.request({
  //           method: "wallet_addEthereumChain",
  //           params: [
  //             {
  //               chainName: "Polygon Mumbai",
  //               chainId: ethers.utils.toHex(chainID),
  //               nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
  //               rpcUrls: ["https://endpoints.omniatech.io/v1/matic/mumbai/public/"],
  //             },
  //           ],
  //         });
  //       }
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   const account1 = getAccount();
  //   setAccount(account1.address);
  // }, []);

  return (
    <>
      <Announcment text='Phase 1 is now available🔥🎊!!! Check out our platform and the free courses we offer on it🎯 !' />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
