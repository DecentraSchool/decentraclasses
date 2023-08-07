import React from 'react'
import ReactPlayer from "react-player";
import arrowDown from "./down-arrow.svg"
const Courseplace = () => {
  return (
    <div className='flex justify-between '>
        <div className='w-[60%] m-10' >
            <div className='w-[80%] flex bg-slate-300 mix-blend-multiply p-10 justify-center'>
            <ReactPlayer url={'https://www.youtube.com/watch?v=FTFaQWZBqQ8'} />
            </div>
            <div className='mt-10'>
                <ul className='flex justify-between'>
                    <li>Overview</li>
                    <li>Q&A</li>
                    <li>Reviews</li>
                </ul>
                <hr />
                <h1 className='font-bold text-2xl mt-5 mb-5'>About this course</h1>
                <p className='mb-5'>Build a Full Stack Amazon Clone with Admin Panel using Flutter, Nodejs, Express & MongoDB</p>
                <h1 className='font-bold text-2xl mt-5 mb-5'>Description</h1>
                <p className='mb-5'>This is Flutter E-Commerce App with a Backend. This Shopping App uses Javascript, Node, Express, MongoDB, and Mongoose and is designed for beginners. This 12-hour course also covers Migration to Flutter 3 and a preview of the app with Material 3! This Flutter project covers the complete UI of Amazon including features like auth with email/password, cart, searching products, fetching them based on category, rating them, fetching deal of the day, checking out using GPay/Apple Pay, viewing the orders, the details of the order along with their status which can be changed from the admin panel, view total sales and graph of sales based on category.In this course, you'll learn to build the UI of Amazon from scratch, create REST APIs using Node, store data in MongoDB using Mongoose, use REST APIs with Flutter & Dart using Models, use the Flutter State Management tool as Provider and create a cross-platform app that works on Android and iOS.</p>
                
            </div>
        </div>
        <div className='w-[40%] ml-10 mt-10'>
            <div className='w-[80%] bg-white h-[100vh]'>
                <h1 className='font-bold text-2xl p-5'>Course Content</h1>
            <details className="group">
                    <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
                    <div className="p-5">
                        <div className='flex justify-between'>
                        <div className="text-[1.25em] mb-2">Section -1 : Introduction</div>
                        <img src={arrowDown} alt="down" width={20} />
                        </div>
                        <span className="">0/5 | 25 mins</span>
                      </div>
                      <span className="transition group-open:rotate-180"></span>
                    </summary>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>Course Resources</span>
                      <span>0:25</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>Join Our Community!</span>
                      <span>0:07</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>App Overview</span>
                      <span>4:25</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>User Flow Walk Through</span>
                      <span>2:25</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>Mockups</span>
                      <span>1:25</span>
                    </button>
                  </details>
                  <details className="group">
                    <summary className="font-medium cursor-pointer list-none bg-white text-black rounded-t-lg ">
                      <div className="p-5">
                        <div className='flex justify-between'>
                        <div className="text-[1.25em] mb-2">Section -1 : Introduction</div>
                        <img src={arrowDown} alt="down" width={20} />
                        </div>
                        <span className="">0/5 | 25 mins</span>
                      </div>
                      <span className="transition group-open:rotate-180"></span>
                    </summary>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>Course Resources</span>
                      <span>0:25</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>Join Our Community!</span>
                      <span>0:07</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>App Overview</span>
                      <span>4:25</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>User Flow Walk Through</span>
                      <span>2:25</span>
                    </button>
                    <button className="flex justify-between w-[100%] p-3 px-5 bg-white text-black rounded-none">
                      <span>Mockups</span>
                      <span>1:25</span>
                    </button>
                  </details>
            </div>
        </div>

    </div>
  )
}

export default Courseplace