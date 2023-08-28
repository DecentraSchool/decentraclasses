import React from "react";
import aboutImg from "../../assets/about.svg"
export default function About() {
  return (
    <div className="" id="about">
      <div className="px-10 md:px-32 py-20 flex flex-col items-center gap-16">
        <h1 className="font-extrabold text-3xl">About Us</h1>
        <div className="flex items-start gap-32">
          <p className="md:w-[70%] flex-col md:text-l">
          <span className="font-bold">Mission:</span> Redefining education through decentralization, turning learning into a valuable asset. <br /><br></br>

          <span className="font-bold">Courses:</span> Explore Web2 and Web3 subjects for cutting-edge knowledge. <br /><br />

          <span className="font-bold">Blockchain Earning:</span> Transform education into earnings with blockchain staking.<br /><br />

          <span className="font-bold">Holistic Approach:</span> Mentorship, career pathways, tradable courses for real-world impact.<br /><br />

          <span className="font-bold">Empowered Community:</span> Join learners turned earners, democratizing education.<br /><br />

        Unlock education's potential with us.<br />
          </p>
          <img src={aboutImg} alt="" className="hidden md:block w-[30%]" />
        </div>
      </div>
    </div>
  );
}
