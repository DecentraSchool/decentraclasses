import React from "react";
import aboutImg from "../../assets/about.svg"
export default function About() {
  return (
    <div className="" id="about">
      <div className="p-32 px-10 flex flex-col items-center gap-16">
        <h1 className="font-extrabold text-3xl">About Us</h1>
        <div className="flex items-start gap-32">
          <p className="md:w-1/2">
            Welcome to Decentraclasses, the cutting-edge edtech platform revolutionizing the way students learn and earn.
            Our web3-based platform combines the power of decentralized technology with immersive learning experiences,
            providing students with a unique opportunity to enhance their knowledge while earning exciting perks. With a
            diverse range of courses across various disciplines, we empower learners of all ages to unlock their full potential. As you dive into our interactive and engaging lessons, you'll earn tokens and rewards for your achievements, which can be redeemed for real-world benefits. Join us on this transformative journey as we reshape education, one decentralized step at a time.
          </p>
          <img src={aboutImg} alt="" className="hidden md:block w-1/3" />
        </div>
      </div>
    </div>
  );
}
