import React, { useEffect, useState } from "react";
import instructor1 from "../../assets/instructor1.jpg";
import "./style.css";
// import mentor_profile from "../../assets/mentor-profile.png";
import { motion } from "framer-motion";
import mentor_profile from "../../assets/mentor.gif";
import { fadeAnimateVariants } from "../animate/animate";

export const MentorCard = ({ portfolio, name, title, session_name, date, info, img, value }) => {
  const [showModal, setShowModal] = useState(false);
  const [rsvpd, setrsvpd] = useState(false);

  // useEffect(() => {
  //   setrsvpd(localStorage.getItem("rsvp"));
  //   console.log(rsvpd);
  // }, [rsvpd]);

  return (
    <motion.div
      className="card-container"
      variants={fadeAnimateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={value}
    >
      {showModal && (
        <div
          id="popup-modal"
          tabindex=""
          style={{ height: "100%", zIndex: "1000", position: "absolute" }}
          class="w-[350px] md:w-96  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50"
        >
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div
                style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100%" }}
                class="p-6 w-full text-center flex flex-col justify-center align-middle"
              >
                <img
                  style={{ width: "150px", height: "150px", alignContent: "center", left: "50%" }}
                  className="items-center md:ml-32 ml-20 content-center"
                  src={mentor_profile}
                />

                <h3 class="mb-5 md:text-lg font-normal text-gray-500 dark:text-gray-400">{info}</h3>
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
        variants={fadeAnimateVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={value}
        className="w-[350px] md:w-96  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex flex-col items-center pb-10">
          <img
            style={{ width: "250px", height: "250px" }}
            className="w-34 mt-3 h-34 mb-1 rounded-full shadow-lg"
            src={img}
            alt="Instructor"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
          <a
            href={`https://${portfolio}`}
            target="_blank"
            className="text-sm text-gray-500 underline dark:text-gray-400"
          >
            {portfolio}
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-400">{session_name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
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
      </motion.div>
    </motion.div>
  );
};
