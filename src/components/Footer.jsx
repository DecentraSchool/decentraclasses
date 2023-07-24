import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer style={{ bottom: "0" }} className=" bg-white pb-2">
      <div className="px-10 py-20 flex flex-col gap-16">
        <div className="flex justify-between">
          <div className=" flex flex-col gap-1">
            <h1 className="font-bold">Decentra School</h1>
            <p className="max-w-sm pb-4">
              India First Learn to Earn (L2E) Platform with Staking, innovative courses, and enjoy the perks of
              lifelong learning.
            </p>
            <div className="flex gap-4">
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="font-bold">Contact</h1>
            <a href="/" className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faFacebook} />
              <p>contactatsytrax@gmail.com</p>
            </a>
            <a href="/" className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faFacebook} />
              <p>+91 454548864</p>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">About</h1>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
        <p className="">&copy; 2020 DecentraSchool.in All Rights Reserved.</p>
      </div>
    </footer>
  );
}
