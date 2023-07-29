import React from 'react';
import sample from '../../assets/coursesample.png';
import star from '../../assets/stars.svg';
import style from './style.css';

const CourseCard = () => {
  return (
    <div className="main-container p-4 rounded-lg shadow-lg flex flex-col">
      <div className="img-container">
        <div className="course-image-container">
          <img src={sample} className="course-image object-cover h-50" />
        </div>
      </div>
      <div>
          <h1 style={{fontSize: "24px", textAlign: "center", whiteSpace: "pre-wrap", wordBreak: "break-word"}}>Solidy for beginners 2023</h1>
          <p style={{textAlign: "left"}}>Jonas Patil</p>
      </div>
      <div className="star-rating flex justify-center gap-3">
      <span className="text-orange">4.7</span>
        <img src={star} alt="rating" />
        <span >(4,859)</span>
      </div>

      <div className="mt-5 pricing flex justify-center ">
        <h2 className="price">
        Rs. 999 /-
        </h2>
      </div>
      
    </div>
  );
};

export default CourseCard;
