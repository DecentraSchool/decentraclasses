import React from "react";
import sample from "../../assets/coursesample.png";
import star from "../../assets/stars.svg";
import { Link } from "react-router-dom";
// import style from './style.css' ;

const CourseCard = ({ img, title, desc, course }) => {
  console.log(course);
  return (
    <div className="main-container p-4 rounded-lg  flex shadow-xl flex-col  ">
      <span className="text-blue-700">{course.category}</span>
      <div className="img-container">
        <div className="course-image-container">
          <img src={img} className="object-contain course-image  md:h-60 w-full h-96" />
        </div>
      </div>
      <div>
        <h1
          className="mt-4"
          style={{ fontSize: "24px", textAlign: "center", whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        >
          {title}
        </h1>
        <p style={{ textAlign: "left" }}>{desc}</p>
      </div>
      <div className="star-rating flex justify-center gap-3">
        <span className="text-orange">4.7</span>
        <img src={star} alt="rating" />
        {/* <span>(4,859)</span> */}
      </div>

      <div className="mt-5 pricing flex justify-center ">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <Link to={`/course/${course?.id}`}>Start Course</Link>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
