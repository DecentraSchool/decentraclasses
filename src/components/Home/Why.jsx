import React from "react";

export default function Why() {
  return (
    <div>
      <div className="p-32 px-10 flex flex-col gap-16">
        <h1 className="font-extrabold text-3xl ">Why DecentraSchool ?</h1>
        <p className="">
          Decentraschool, we're passionate about revolutionizing education through decentralized technology. Choose us
          for a transformative learning experience, where knowledge and rewards go hand in hand, empowering you to
          thrive in the digital age. Join us today and embark on a journey of lifelong learning and endless
          possibilities.
        </p>
        <div className="flex flex-wrap flex-row gap-5 justify-evenly ">
          <div className="flex flex-col gap-5 items-center text-center p-5  bg-blue-300">
            <div className="flex gap-3 items-center w-max ">
              <img src="/images/mLearn.png" alt="" />
              <h3 className="font-bold">Learn and Earn</h3>
            </div>
            <p>
              {" "}
              At decentraschool, we believe in rewarding your dedication and efforts. As you engage with our courses,
              you'll not only gain valuable knowledge but also have the opportunity to earn tokens and perks. This
              unique incentive system motivates and encourages continuous learning.
            </p>
          </div>
          <div className=" flex flex-col gap-5 items-center text-center p-5  bg-blue-300">
            <div className="flex gap-3 items-center w-max ">
              <img src="/images/mEarn.png" alt="" />
              <h3>Community and Networking</h3>
            </div>
            <p>
              Join a vibrant community of learners, educators, and industry professionals. Interact with fellow
              students, participate in discussion forums, and expand your network. Connect with like-minded individuals,
              share ideas, and collaborate on projects, fostering a supportive and inspiring learning environment.
            </p>
          </div>
          <div className=" flex flex-col gap-5 items-center text-center p-5  bg-blue-300">
            <div className="flex gap-3 items-center w-max ">
              <img src="/images/mExcel.png" alt="" />
              <h3>Interactive Learning Experience</h3>
            </div>
            <p>
              {" "}
              We prioritize engaging and interactive learning experiences. Our platform integrates multimedia content,
              quizzes, projects, and collaborative activities to keep you actively involved in the learning process. Say
              goodbye to passive learning and embrace a dynamic educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
