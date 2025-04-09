import React from "react";
import homeimage1 from "./Images/home/homeImage1.jpeg";
import homeimage2 from "./Images/home/homeImage2.jpeg";
import homeimage3 from "./Images/home/homeImage3.jpeg";
import homeimage4 from "./Images/home/homeImage4.jpg";
import "./CSS/Home.css";

export default function Home() {
  return (
    <div className="slideshow ">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 img-fluid"
              style={{ height: "37em" }}
              src={homeimage1}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              style={{ height: "37em" }}
              src={homeimage2}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              style={{ height: "37em" }}
              src={homeimage3}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              style={{ height: "37em" }}
              src={homeimage4}
              alt="Fourth slide"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
