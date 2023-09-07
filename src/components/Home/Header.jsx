import React from "react";
import { ethers } from "ethers";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "./logo.svg";
import "./Explore.css";
import { HashLink } from "react-router-hash-link";


const styleNavEl = "before:bg-blue-700 before:left-0  hover:text-blue-700 before:transition-transform hover:before:scale-x-100 before:scale-x-0  before:duration-300 before:flex before:w-full before:h-[2px] relative before:absolute before:bottom-[-4px] before:rounded-full "
const activeNavEl = "before:bg-blue-700 before:left-0 text-blue-700 before:transition-transform  before:scale-x-100 before:duration-300 before:flex before:w-full before:h-[2px] relative before:absolute before:bottom-[-4px] before:rounded-full"
const styleMobileNavEl = "p-3 font-medium"
const activeMobileNavEl = "bg-sky-400 text-white font-medium relative h-full   w-full text-center p-3"
const styleMobileNavBox = "opacity-0 z-[60]  relative lg:hidden mt-2 pb-4 flex flex-col items-center transition-all duration-1000 flex shadow-sm flex-col gap-0 items-center -top-[26rem] bg-white -z-20"
const activeMobileNavBox = "z-[60] relative lg:hidden mt-2 pb-4 flex flex-col items-center transition-all duration-500 flex flex-col gap-2 items-center  absolute top-0 bg-gray-100 pb-5 sm:shadow-none shadow-md shadow-gray-700"


export default function Header() {
  const [account, setAccount] = useState(null);
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const Location = useLocation();
  const targetLinks = [Location.pathname, Location.hash, Location.pathname.split("/")[1]];

  return (
    <header className="header">
      <nav className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:w-[260px] w-[200px]">
              <a href="/">
                <img src={logo} alt="Logo" className="w-full" />
              </a>
            </div>
            <ul className="hidden lg:flex items-center xl:gap-9 lg:gap-6 ">
              <li className={targetLinks[0] === "/" && targetLinks[1] === "" ? activeNavEl : styleNavEl}>
                <Link to="/">Home</Link>
              </li>
              <li className={targetLinks[2] === "courses" ? activeNavEl : styleNavEl}>
                <Link to="/courses">Courses</Link>
              </li>
              <li className={targetLinks[2] === "community" ? activeNavEl : styleNavEl}>
                <Link to="/community">Community</Link>
              </li>
              <li className={targetLinks[2] === "mentor" ? activeNavEl : styleNavEl}>
                <Link to="/mentor">Mentorship</Link>
              </li>
              {/* <li className={targetLinks[2] === "careers" ? activeNavEl : styleNavEl}>
                <Link to="/careers" >Career</Link>
              </li> */}
              <li className={targetLinks[1] === "#about" ? activeNavEl : styleNavEl}>
                <HashLink to="/#about" smooth>
                  About us
                </HashLink>
              </li>
              <ConnectButton label="Login" chainStatus="full" />
            </ul>
            <div className="lg:hidden flex items-center z-60">
              <button className="focus:outline-none" onClick={toggleNavbar}>
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M3.293 6.293a1 1 0 0 1 1.414 0L10 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 0-1.414z"
                    ></path>
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 10a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <ul className={isOpen ? activeMobileNavBox : styleMobileNavBox}>
          <li className={(targetLinks[0] === "/" && targetLinks[1] === "") ? activeMobileNavEl : styleMobileNavEl} >
            <Link to="/" onClick={toggleNavbar}>Home</Link>
          </li>
          <li className={targetLinks[2] === "courses" ? activeMobileNavEl : styleMobileNavEl} >
            <Link to="/courses" onClick={toggleNavbar}>Courses</Link>
          </li>
          <li className={targetLinks[2] === "community" ? activeMobileNavEl : styleMobileNavEl} >
            <Link to="/community" onClick={toggleNavbar}>Community</Link>
          </li>
          <li className={targetLinks[2] === "mentor" ? activeMobileNavEl : styleMobileNavEl} >
            <Link to="/mentor" onClick={toggleNavbar}>Mentorship</Link>
          </li>
          {/* <li className={targetLinks[2] === "careers" ? activeMobileNavEl : styleMobileNavEl}>
                <Link to="/careers" >Career</Link>
              </li> */}
          <li className={targetLinks[1] === "#about" ? activeMobileNavEl : styleMobileNavEl} >
            <HashLink to="/#about" onClick={toggleNavbar} smooth>About us</HashLink>
          </li>
          <li className="mt-3 rounded-lg" onClick={toggleNavbar}>
            <ConnectButton />
          </li>
        </ul>

      </nav>
    </header>
  );
}
