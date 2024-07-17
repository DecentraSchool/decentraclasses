import React from "react";
import About from "./About";
import Courses from "./Courses";
import Explore from "./Explore";
import Start from "./Start";
import Why from "./Why";
import Collab from "./Collab";
import Supporters from "./Supporters";
import Truster from "./Truster";
import { Tweet } from "react-tweet";
import FAQhome from "./FAQhome";
import StatsComponent from "./Stats";
import Recogonised from "./Recogonised";
export default function Main() {
  return (
    <main className=" w-[99vw] md:w-[99%] overflow-x-hidden">
      <Explore />
      <Why />
      <Recogonised />
      <Truster></Truster>
      <StatsComponent />
      <About />
      <Start />
      <Courses />
      <FAQhome></FAQhome>

      {/* <div>
        <Tweet id="1629307668568633344" />
      </div> */}
      {/* <Supporters /> */}
    </main>
  );
}
