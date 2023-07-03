import React from "react";
import Header from "../Header";
import ReactPlayer from "react-player";

const Dash = () => {
  return (
    <div>
      <div className="flex w-full h-full justify-center align-middle mb-32">
        <p className="text-4xl font-mono">Welcome to the Course</p>
      </div>
      <div className="flex w-full h-full justify-center align-middle mb-32">
        <ReactPlayer url="https://youtu.be/GWUwFDFOipo" />
      </div>
    </div>
  );
};

export default Dash;
