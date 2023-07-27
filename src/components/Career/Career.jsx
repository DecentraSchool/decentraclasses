import React from 'react';
import './style.css';
import JobHeading from '../JobHeading/JobHeading';
import JobDetails from '../JobDetails/JobDetails';

const image =
  'https://generation-sessions.s3.amazonaws.com/2bb37f5cb66f51fbabc51797452dfcf7/img/explore-from-scrabble-blocks@2x.png';

export const Career = () => {
  return (
    <>
      <div
        className="mt-10 mx-auto w-full md:w-2/3"
        style={{ maxWidth: '1065px' }}
      >
        <div className="hero-rectangle rounded-xl overflow-hidden shadow-md p-4 md:flex">
          <div className="md:w-2/3 md:pr-4">
            <h2 className="hero-heading font-bold mb-2">
              Discover what's possible
            </h2>
            <p className="text-gray-600">
              Let your heart take you to wherever you want to be. God gave you
              this gift of imagination. Use it. You can spend all day playing
              with mountains. And I know you're saying, 'Oh Bob, you've done it
              this time.' And you may be right. But we're not there yet
            </p>
          </div>

          <div className="md:h-224">
            <img
              src={image}
              alt="Image"
              className="w-full h-auto md:rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className='mt-20 flex-col items-center justify-center mx-auto w-2/3'>
            <h2 className="text-center" style={{color:"black", fontWeight: "700", fontSize: "40px"}}>Are you ready to kickstart you Web 3 career? Browse exciting job openings and apply now!</h2>
            <div className="button-container flex justify-center items-center mt-10">
              
            <button className="jobs-button mt-4 py-2 px-4 ">
          Apply Now
        </button>
            </div>
      </div>

      <div className='mt-20 flex-col items-center justify-center mx-auto w-2/3'>
            <h2 className="text-center" style={{color:"black", fontWeight: "700", fontSize: "48px"}}>Join DecentraSchool</h2>
            <div className="button-container flex justify-center items-center">
              
            <p style={{fontWeight: "bold", fontSize:"24px"}}>Develope a decentralized internet</p>
            </div>
      </div>

      <div className="mt-10 mx-auto w-full md:w-2/3" style={{ maxWidth: '1065px' }}>
        <div className="hero-rectangle rounded-xl overflow-hidden shadow-md p-4 md:flex flex-col">
          <JobHeading />
          <JobDetails />
          <JobHeading />
          <JobDetails />
          <JobDetails />
        </div>
      </div>

      <h2 className="text-center mt-10" style={{color:"black", fontWeight: "700", fontSize: "48px"}}>Got Questions ?</h2>
      <div className="flex flex-col mt-10">
        <div className="flex justify-evenly">
          <h2 style={{fontSize: "32px", fontWeight: "700"}}>What is Web3</h2>
          <h2 style={{fontSize: "32px", fontWeight: "700"}}>Why choose Web3 jobs?</h2>
          <h2 style={{fontSize: "32px", fontWeight: "700"}}>How do i apply</h2>
        </div>
        <div className="flex justify-center gap-10 my-5">
          <p className="w-1/4 text-left">Web 3 is the next generation internet, focusing on decentralization, privacy, and user empowerment. It’s powered by blockchain technology, creating a more open and transparent internet ecosystem.</p>
          <p className="w-1/4 text-center">Web 3 companies are shaping the future of the digital world. Working in this domain will provide you with growth opportunities, cutting-edge skill development, and a chance to make an impact on a global scale.</p>
          <p className="w-1/4 text-right">Click on the 'View Jobs' button and browse through the job listings. Follow the application instructions provided by each company and submit your application directly.</p>
        </div>
      </div>
      
    </>
  );
};
