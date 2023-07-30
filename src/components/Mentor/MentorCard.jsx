import React, { useEffect, useState } from "react";
import instructor1 from "../../assets/instructor1.jpg";
import "./style.css";
// import mentor_profile from "../../assets/mentor-profile.png";
import { motion } from "framer-motion";
import mentor_profile from "../../assets/mentor.gif";

export const MentorCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [rsvpd, setrsvpd] = useState(false);

  // useEffect(() => {
  //   setrsvpd(localStorage.getItem("rsvp"));
  //   console.log(rsvpd);
  // }, [rsvpd]);

  return (
    <div className="card-container">
      {showModal && (
        <div id="popup-modal" tabindex="-1" style={{ width: "600px", height: "100%", position: "absolute" }} class=" ">
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div
                style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100%" }}
                class="p-6 w-full text-center flex flex-col justify-center align-middle"
              >
                <img
                  style={{ width: "150px", height: "150px", alignContent: "center", left: "50%" }}
                  className="items-center ml-32 content-center"
                  src={mentor_profile}
                />

                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Meet Atharva Akshat, your Python specialist! With over half a year of hands-on experience mastering
                  Python's power, I bring a wealth of knowledge to our team. My expertise goes beyond development – they
                  are also a seasoned instructor, making complex concepts easy to grasp for learners of all levels.
                  Embrace the Python journey with me, and together, let's unlock the full potential of this incredible
                  programming language!
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Noice, Lets RSVP?
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <div className="w-96 max-w-sm bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img className="w-34 mt-3 h-34 mb-1 rounded-full shadow-lg" src={instructor1} alt="Instructor" />
          <h5 className="mb-1 text-xl font-medium text-gray-900">Atharva Akshat</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Python specialist</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">AMA session</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">05 August 2023 - 3pm IST</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              onClick={() => setShowModal(true)}
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              KYI - Know Your Instructor
            </a>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {rsvpd == true && (
              <a
                target="_blank"
                // href="https://app.huddle01.com/lwc-zlaw-wqs"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue bg-white rounded-lg hover:bg-green-80 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                https://app.huddle01.com/lwc-zlaw-wqs
              </a>
            )}
            {rsvpd == false && (
              <a
                onClick={() => {
                  localStorage.setItem("rsvp", true);
                  setrsvpd(true);
                }}
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue bg-white rounded-lg hover:bg-green-80 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                RSVP
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
