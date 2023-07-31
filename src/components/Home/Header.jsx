import React from "react";
import { ethers } from "ethers";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "./logo.svg";
import "./Explore.css";
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

  return (
    <header className="header">
      <nav className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="Logo" className=" w-[225px] h-[32px]" />
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <Link to="/" className="mx-4 hover:text-blue-700">
                Home
              </Link>
              <Link to="/courses" className="mx-4 hover:text-blue-700">
                Courses
              </Link>
              <Link to="/community" className="mx-4 hover:text-blue-700">
                Community
              </Link>
              <Link to="/mentor" className="mx-4 hover:text-blue-700">
                Mentorship
              </Link>
              <Link to="/careers" className="mx-4 hover:text-blue-700">
                Career
              </Link>
              <a href="/#about" className="mx-4 hover:text-blue-700">
                About us
              </a>
              <ConnectButton />
            </div>
            <div className="md:hidden flex items-center">
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
        {isOpen && (
          <div className="md:hidden mt-2 py-2">
            <Link to="/" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
              Home
            </Link>
            <Link to="/courses" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
              Courses
            </Link>
            <Link to="/community" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
              Community
            </Link>
            <Link to="/careers" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
              Career
            </Link>
            <a href="#" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
              About us
            </a>
            <div className="flex items-center justify-center py-4">
              <ConnectButton className="block" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
