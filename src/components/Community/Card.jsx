import React from "react";

export default function Card(props) {
  return (
    <>
      <section className={`card-body ${props.newClass}`}>
        <div className="card-skeleton">
          <h2>{props.title}</h2>
          <ul>
            <li>
              <span className="dollar">&#36;</span>
              <span>{props.price}</span>
            </li>
            <li>
              {props.storage} {props.bytes} Storage
            </li>
            <li>{props.user} Live Lectures</li>
            <li>Free {props.send} Courses</li>
          </ul>
          <button>Join Us</button>
        </div>
      </section>
    </>
  );
};