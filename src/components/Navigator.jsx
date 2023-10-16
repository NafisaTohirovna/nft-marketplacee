import { useState } from "react";
import { navLink } from "../data/data.js";
const Navigator = () => {
  let [bars, setBars] = useState(false);

  const handleBars = () => {
    bars = !bars;
    setBars(bars);
  };

  return (
    <header>
      <div className="container d-flex jcsb aic ">
        <div
          className={`shadow ${bars == true ? "shadow-bg" : ""}`}
          onClick={handleBars}
        ></div>
        <a href="#0">
          <img src="images/assets/Logo.png" alt="" />
        </a>
        <ul
          className={`nav d-flex aic jcsb gap40 ${
            bars == true ? "active" : ""
          }`}
        >
          {navLink.map(({ id, title, link }) => {
            return (
              <li key={id}>
                <a href={link}>{title}</a>
              </li>
            );
          })}
          <li>
            <button className="btn d-flex aic gap10">
              <i className="fa-regular fa-user"></i> Sign Up
            </button>
          </li>
        </ul>
        <div
          className={`bars ${bars == true ? "active" : ""}`}
          onClick={handleBars}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navigator;
