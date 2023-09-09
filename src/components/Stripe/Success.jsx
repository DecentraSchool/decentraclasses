import React from 'react';
import './success.css';
import success from '../../assets/success.png';

const Success = () => {
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="container">
        <h2 className="title">
          <span className="title-word title-word-1">Thank you </span>
          <span className="title-word title-word-2">for supporting </span>
          <span className="title-word title-word-3">our </span>
          <span className="title-word title-word-4"> creators !!!</span>
        </h2>
      </div>

      {/* <h1 className="suctext text-center">
        Thank you for supporting our creators !!!
      </h1> */}
      <div className="flex justify-center align-middle w-full h-full">
        <img className="h-[400px] " src={success} />
      </div>
    </div>
  );
};

export default Success;
