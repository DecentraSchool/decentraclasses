import React from 'react';
import './style.css';

const JobDetails = () => {
  return (
    <div className="mt-2 mx-auto w-full">
        <div className="job-rectangle overflow-hidden shadow-md p-4 md:flex">
        <div className="flex justify-between w-full">
            <div>
                <div>
                    <p className="font-bold text-white">Developer and strategy planner execution</p>
                </div>
                <div className="w-2/3 ">
                    <p className="text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga ducimus enim odit error architecto fugiat placeat reiciendis, sint voluptatum repellat. Fugiat ad doloremque nesciunt eum, commodi unde mollitia esse.</p>
                </div>
            </div>
            
            <div className="flex flex-col justify-center w-1/3">
            <div >
                <p className="font-bold text-white">Remote</p>
            </div>
                <div>
                    <p className="text-white">Full time {">"}</p>
                </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default JobDetails