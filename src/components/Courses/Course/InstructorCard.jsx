import React from "react";

const InstructorCard = ({ instructorInfo }) => {
  return (
    <div className="md:ml-20 mb-20">
      <h1 className="text-[2em] font-bold mb-5">Instructor</h1>
      <div className="flex w-full h-fit gap-8">
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          className="w-30 h-30 "
          src={instructorInfo?.image}
          alt=""
        />
        <div className="align-middle gap-5 justify-between flex flex-col h-fit mt-7">
          <h1 className="text-2xl font-bold">
            {instructorInfo?.name}
          </h1>{" "}
          <p>{instructorInfo?.desig}</p>
          <p>No of Courses: 1</p>
        </div>
      </div>
      <p className="mt-10">{instructorInfo?.desc}</p>
      <p className="mt-10 mb-5">⭐4.6 course rating *15K ratings</p>
      <hr />
    </div>
  );
};

export default InstructorCard;
