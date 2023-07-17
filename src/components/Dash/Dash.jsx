import React from "react";
import Header from "../Header";
import ReactPlayer from "react-player";

const Dash = () => {
  return (
    <div className="my-10">
      <div className="flex w-full h-full justify-around align-middle mb-32">
        <ReactPlayer url="https://youtu.be/GWUwFDFOipo" />
        <div className="flex flex-col justify-between w-[30%] h-[100%] bg-[#2D3E50] text-white p-6 rounded-lg">
          <h1 className="py-3 font-bold">Course Playlist</h1>
          <button className="bg-white text-black w-[100%] h-[50px] rounded-lg text-left p-3 my-3">
            1.Introduction
          </button>
          <button className="bg-white text-black w-[100%] h-[50px] rounded-lg text-left p-3 my-3">2.Basics</button>
          <button className="bg-white text-black w-[100%] h-[50px] rounded-lg text-left p-3 my-3">
            3.Getting Started
          </button>
        </div>
      </div>
      <div className=" relative w-[50%] h-[50px] bg-[#2D3E50] left-[5%] flex justify-around align-center rounded-lg">
        <input type="text" className="w-[80%] h-[70%] my-2 rounded-lg"></input>
        <button className="text-white">Send</button>
      </div>
    </div>
  );
};

export default Dash;
