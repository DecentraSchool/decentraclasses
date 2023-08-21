import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../assets/footerLogo.svg";

export default function Footer() {
  return (
    <footer style={{ bottom: "0" }} className=" bg-white pb-2 text-[14px]">
      <div className="pt-[45px] pr-[50px] pb-[34px] pl-[34px] flex flex-col gap-[40px]">
        <div className="flex lg:flex-row flex-col-reverse  items-start justify-between gap-[50px]">
          <div className="flex flex-col justify-between gap-[30px]">
            <div className="flex gap-[24px] flex-col max-w-[48ch]">
              <div className=" w-[285px]">
                <img src={footerLogo} alt="" />
              </div>
              <p>

                India's First Learn to Earn (L2E) Platform with Staking, innovative courses, and perks of lifelong learning.

              </p>
            </div>
            <div className="text-[#777777]">
              <p>© 2023 Decentraclasses . All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex xl:gap-[100px] lg:gap-[50px] gap-[30px] sm:flex-row flex-col lg:w-min w-full  justify-between">
            <div className="flex flex-col items-start gap-[18px]">
              <p className="truncate text-[18px] font-semibold">NEED HELP ?</p>
              <ul className="flex flex-col items-start gap-[8px]">
                <li className="truncate tracking-wide ">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="truncate tracking-wide ">
                  <a href="/">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[18px]">
              <p className="truncate text-[18px] font-semibold">ABOUT US</p>
              <ul className="flex flex-col items-start gap-[8px]">
                <li className="truncate tracking-wide ">
                  <a href="/">About Us</a>
                </li>
                <li className="truncate tracking-wide ">
                  <a href="/community">Community</a>
                </li>
                <li className="truncate tracking-wide ">
                  <a href="/Mentor">Mentorship</a>
                </li>
                <li className="truncate tracking-wide ">
                  <a href="/careers">Career</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[18px]">
              <p className="truncate text-[18px] font-semibold">CONTACT US</p>
              <ul className="flex flex-col items-start gap-[8px]">
                <li className="text-[#1d4ed8] hover:text-black cursor-pointer flex gap-1 items-baseline">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-xs" />
                  <p>decentraclasses@gmail.com</p>
                </li>
                <li className="text-[#1d4ed8] hover:text-black cursor-pointer flex gap-1 items-baseline">
                  <FontAwesomeIcon icon={faPhone} className="fa-xs" />
                  <p>+91 93156 77209</p>
                </li>
                <li className="font-semibold text-[16px]">Stay in touch with us</li>
                <li className="max-w-[34ch]">Leave us your email to get the latest news and updates</li>
                <li className="flex w-full">

                  <input placeholder="Your Email" className="flex-grow bg-transparent outline-none border-[1px] border-solid border-black border-r-0 text-[12px] px-[12px] tracking-wide" />
                  <button className="border-[1px] border-solid border-l-transparent px-[12px] py-[9px] text-[13px] bg-transparent font-semibold text-[#1d4ed8] border-black hover:text-white hover:bg-black transition-all duration-300 truncate">Subscribe</button>

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-[25px] py-[5px] border-t-[0.5px] flex items-center text-[16px] gap-[10px] flex-col">
          <p className="truncate text-[18px] font-semibold">Connect with us</p>
          <ul className="flex gap-[20px] text-[24px]">
            <li className="text-[#1d4ed8] hover:text-black">

              <a href="https://www.facebook.com/decentraclasses/" rel="noreferrer" target="_blank" >

                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="text-[#1d4ed8] hover:text-black">

              <a href="https://twitter.com/decentraclasses" rel="noreferrer" target="_blank" >

                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="text-[#1d4ed8] hover:text-black">

              <a href="https://www.linkedin.com/company/decentraclasses/" rel="noreferrer" target="_blank" >

                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="text-[#1d4ed8] hover:text-black">

              <a href="https://www.instagram.com/decentraclasses/" rel="noreferrer" target="_blank" >

                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
