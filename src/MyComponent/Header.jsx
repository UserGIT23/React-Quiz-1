import React from "react";
import "./CSS/Header.css";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom"; //import link

export default function Header() {
  return (
    <div className="nav-bar">
      <h3 style={{ margin: "20px" }}>
        <GiCoffeeCup color="rgb(255, 242, 2)" size={45} />
        <span className="title" style={{ fontFamily: "fantasy" }}>
          BiG BOOM CAFE
        </span>
      </h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./Main"> Category</Link> {/*Use link here */}
        </li>
        <li>Our locations</li>
        <li>About us</li>
      </ul>
    </div>
  );
}
