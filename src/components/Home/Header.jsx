import React from "react";
import { ethers } from "ethers";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "./logo.svg"
export default function Header() {
  const [account, setAccount] = useState(null);
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <header>
      <nav className="container px-10 py-10 pb-8 flex justify-between items-center">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className=" w-[225px] h-[32px]" />
          </a>
        </div>
        <ul className="flex gap-12 items-center font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/careers">Career</Link>
          </li>
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <ConnectButton />
          </li>
          {/* <li>
            {account ? (
              <button type="button" className="font-bold bg-purple-300 rounded px-3 py-2  text-white">
                {account.slice(0, 5) + "..." + account.slice(38, 42)}
              </button>
            ) : (
              <button type="button" className="bg-[#03A9F4] w-[108px] rounded-full h-[32px]" onClick={connectHandler}>
                Register
              </button>
            )}
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
