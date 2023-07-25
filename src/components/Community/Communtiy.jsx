import React from 'react'
import Header from '../Header'
import Main from './Main'
import './community.css';
import communityLanding from './community-landing.png';
import feature1 from './feature1.png';
import feature2 from './feature2.png';
import silver from "./silver.png";
import bronze from "./bronze.png";

export default function Communtiy() {
    return (
        <div>
            {/* First Section */}
            <div className='max-w-[1440px] flex mx-[4em] justify-center mt-10'>
                <div className='w-[40%] mx-20'>
                    <h1 className='font-bold text-[2.25em]'>Community-power learning among people like you</h1>
                    <p className='my-8 font-semibold text-[1em]'>The Collective is a home for high-growth professionals developing web3 strategy, building communities, and launching NFT initiatives for their brand or enterprise. Learn and move faster as a community.</p>
                    <button className='p-3 rounded-full font-bold bg-yellow-400'>Become Member</button>
                </div>
                <div className='w-[30%]'>
                    <img src={communityLanding} alt="" />
                </div>
                
            </div>
            {/* Second Section  */}
            <div className='max-w-[1440px] mx-[4em] mt-10 text-center'>
                <h1 className='font-bold text-[2.25em] mt-20'>Why To Join ?</h1>
                <p className='text-[1.5em] font-semibold my-10'>Exchange growth and development insights with top Web3 professionals</p>
                <p className='w-[50%] mx-[25%] my-10'>Discover the dazzling world of EduTeck’s Web 3 Community, where we’ll guide you through the three essential stages - beginner, intermediate, and advanced - elevating your tech skills like never before.</p>
                
            </div>
            {/* Third Section  */}
            <div className='flex justify-center'>
                <div className='w-[20%] bg-slate-300 p-5 rounded-lg mb-3'>
                    <h1 className='text-[2em] font-bold mb-3 text-sky-500'>3000+</h1>
                    <h1 className='text-[1.25em] font-semibold mb-3'>Mind-blowing Web 3 Tales</h1>
                    <p>We only invite the finest minds. This ensures our community makes you hooked and stay in.</p>
                </div>
                <div className='w-[30%] bg-slate-300 p-5 mx-5 rounded-lg flex'>
                    <div className='w-[60%]'>
                    <h1 className='text-[1.5em] font-bold mb-5'>Other Highlighting feature</h1>
                    <p>We only invite the finest minds.This ensures our community remains eget in.</p>
                    </div>
                    <div className='w-[40%] h-[60%] ml-5'>
                        <img src={feature1} alt="" />
                    </div>
                </div>
            </div>
            {/* Fourth Section  */}
            <div className='flex justify-center mt-5'>
                
                <div className='w-[30%] bg-slate-300 p-5 mx-5 rounded-lg flex'>
                <div className='w-[40%] h-[60%] mr-5'>
                        <img src={feature2} alt="" />
                    </div>
                    <div className='w-[60%]'>
                    <h1 className='text-[1.5em] font-bold mb-5'>Other Highlighting feature</h1>
                    <p>We only invite the finest minds.This ensures our community remains eget in.</p>
                    </div>
                    
                </div>
                <div className='w-[20%] bg-slate-300 p-5 rounded-lg mb-3'>
                    <h1 className='text-[2em] font-bold mb-3 text-sky-500'>10000+</h1>
                    <h1 className='text-[1.25em] font-semibold mb-3'>Mind-blowing Web 3 Tales</h1>
                    <p>We only invite the finest minds. This ensures our community makes you hooked and stay in.</p>
                </div>
            </div>
            {/* Fifth Section  */}
            <div className='flex justify-center mt-20'>
                <div className='w-[40%] mt-20'>
                    <h1 className='text-[2em] font-bold mb-5'>Beginners: Unlock Your Potential</h1>
                    <p className='font-semibold'>New to coding? No worries! Our beginner stage includes handpicked resources and interactive lessons designed to get you started on your fabulous journey of mastering Web 3 technology.</p>
                </div>
                <div>
                    <img src={silver} alt="" />
                </div>
            </div>
            {/* Sixth section */}
            <div className='flex justify-center mt-10'>
            <div>
                    <img src={bronze} alt="" />
                </div>
                <div className='w-[44%] mt-20'>
                    <h1 className='text-[2em] font-bold mb-5'>Intermediate and Advanced: Skyrocket Your Career</h1>
                    <p className='font-semibold'>Already familiar with coding? Get ready to fast-track your knowledge with our immersive intermediate and advanced stages! Dive deep into cutting-edge Web 3 concepts and refine your skills, with expert guidance every step of the way.</p>
                </div>
                
            </div>
            {/* Seventh Section  */}
            <div className='w-[50%] mx-[25%] mt-20 mb-20'>
                <h1 className='text-[2em] font-bold mb-5 text-center'>Join Today!</h1>
                <p className='font-semibold mb-10 text-center'>Ready to embrace the future of technology? There’s no better time to become a part of EduTeck's Web 3 Community. Sign up now for behind-the-scenes access to the industry's most thrilling projects and ventures!</p>
                <div className='text-center space-x-10'>
                <button className='p-3 rounded-full font-bold bg-yellow-400'>Let’s get started</button>
                <button className='p-3 rounded-full font-bold border-yellow-400 border-2 text-yellow-400'>Meet Our  Experts</button>
                </div>
            </div>
        </div>
    )
}
