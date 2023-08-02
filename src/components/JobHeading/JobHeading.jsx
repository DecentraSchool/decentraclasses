import React from "react";
import "./style.css";

const JobHeading = () => {
  return (
    <>
      <div className="mt-5 flex md:flex-row flex-col justify-between w-full">
        <div>
          <p className="font-bold " style={{ fontSize: "24px" }}>
            Growth and Marketting
          </p>
        </div>

        <div>
          <button className="opening-button overflow-hidden px-2 py-2">1 Open role</button>
        </div>
      </div>
    </>
  );
};

export default JobHeading;
