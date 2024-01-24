import React from "react";
import FAQimg from "../../assets/FAQ_img.png";
const FAQhome = () => {
  return (
    <div>
      <div className="text-black mb-10">
        <h1 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight flex justify-center">
          FAQ
        </h1>
        <div className="lg:flex w-screen justify-around">
          <div className="hidden lg:block lg:w-[30%] ml-20">
            <img src={FAQimg} alt="FAQ" />
          </div>
          <div className="w-[80%] mx-auto lg:w-[80%]">
            <div className="">
              <div className="grid divide-y lg:max-w-3xl mx-auto mt-8 border-2 px-5">
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>What is Decentraclasses ?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 group-open:animate-fadeIn">
                      Decentraclasses: A decentralised edutech platform
                      revolutionizing education through Web3 technology. We
                      provide a broad array of courses across various
                      disciplines. Our platform merges immersive learning
                      experiences with the power of decentralized technology,
                      allowing students to learn and earn, and enjoy perks for
                      their achievements.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        Am I at the right place if I want to learn and earn?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 group-open:animate-fadeIn">
                      Absolutely! If you're eager to learn new skills while
                      earning rewards while doing so, you've come to the perfect
                      place! Decentraclasses's innovative model incentivizes
                      continuous learning with incentives and various other
                      perks.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>How do I get started with Decentraschool?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 group-open:animate-fadeIn">
                      Begin your journey by clicking on "LOGIN" located in the
                      upper right corner of your screen and get started with
                      “Google login” Welcome to the future of education!
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Where do I seek assistance if I need it?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 group-open:animate-fadeIn">
                      If you need help, we're here for you! You can chat with
                      our support team directly on the platform or join our
                      lively community on our Discord server.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Can I join Decentraclasses as a beginner?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 group-open:animate-fadeIn">
                      Absolutely! Whether you're a passionate learner or just
                      starting out, Decentraclasses caters to all learning
                      levels. We offer a wide variety of emerging technology
                      courses tailored to help you embark on your Web3 learning
                      journey.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQhome;
