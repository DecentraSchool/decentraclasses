import React from "react";
import sample from "../../assets/coursesample.png";
import { Link } from "react-router-dom";
// import style from './style.css' ;

const CourseCard = ({ img, title, desc, course, category }) => {
  const rating = (Math.random() * 3 + 3).toFixed(1); //courses with 3 star at least
  const starRating = () => {
    const listItems = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      listItems.push(<span key={i}>{"⭐"}</span>);
    }
    return listItems;
  };
  return (
    <div className="main-container md:w-full lg:w-[400px] p-4 rounded-lg  flex justify-between shadow-xl flex-col  ">
      <span className="text-blue-700">{category}</span>
      <div className="img-container">
        <div className="course-image-container">
          <img src={img} className="object-contain course-image  md:h-60 w-full h-60" />
        </div>
      </div>
      <div>
        <h1
          className="md:mt-4"
          style={{ fontSize: "24px", textAlign: "center", whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        >
          {title}
        </h1>
        <p style={{ textAlign: "left" }}>{desc}</p>
      </div>
      {/* <div className="flex items-center justify-center gap-3 mt-2">
        <p className="text-orange">{(rating > 5) ? 5 : rating}</p>
        <p>
          {starRating()}
        </p>
      </div> */}

      <div className="mt-5 pricing flex justify-center ">
        <Link to={`/course/${course?.id}`}>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Start Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
