import React from "react";
import About from "./About";
import Courses from "./Courses";
import Explore from "./Explore";
import Start from "./Start";
import Why from "./Why";
import Collab from "./Collab";

export default function Main() {
  return (
    <main>
      <Explore />
      <Why />
      <div className="flex justify-center align-middle" style={{ width: "100%" }}>
        <Collab />
      </div>
      <About />
      <Start />
      <Courses />
    </main>
  );
}
