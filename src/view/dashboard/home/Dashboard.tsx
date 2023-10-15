import "./Dashboard.styles.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../../../component/Layout.css";
import {
  Headertexts,
  Testimonial,
 
} from "../../../component/Layout";
import React from "react";

export function Dashboard() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead p-0 home ">
        <div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="carousel-indicators m-lg-4 m-md-4   m-0">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active  button"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                className=" button"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                className=" button"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../../asset/sample1/h1.png")}
                  className="img-fluid "
                  alt="."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../../asset/sample1/h2.png")}
                  className="img-fluid "
                  alt="."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../../asset/sample1/h3.png")}
                  className="img-fluid "
                  alt="."
                />
              </div>
            </div>
          </div>
        </div>

        <Headertexts
          h3={
            "Nurturing Growth Through Education"
          }
          p={
            "Nurturing Growth Through Education: Fostering a foundation for knowledge, cultivating curiosity, and shaping bright minds for a promising future. Encouraging critical thinking, instilling a passion for lifelong learning, and promoting values that contribute to personal and societal development. Creating an inclusive and innovative educational environment that nurtures individual talents and diverse perspectives. Emphasizing the importance of character development alongside academic excellence. Building bridges to global awareness, fostering collaboration, and preparing students to navigate the challenges of a rapidly evolving world. "  }
        />

<h3 className="text-center p-4 Teacher">Teacher's</h3>
      <div className="testimonial d-flex flex-wrap justify-content-around py-3">
        <Testimonial
         img={require("../../../asset/sample1/h3.png")}
          h4={`JEGADEESH`}
          p1={`Maths`}
          p2={`Are you looking for assistance with a specific math topic or question? I'm here to help, but I need more information to provide a relevant and helpful response.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/h3.png")}
          h4={`JEYA`}
          p1={`English`}
          p2={`Whether it's related to a particular aspect of English language or literature, or if you need help with an assignment, feel free to share more information so I can better assist you.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/h3.png")}
          h4={`JEGADEESAN`}
          p1={`Science`}
          p2={`Whether it's about a scientific concept, an assignment, or any other science-related inquiry, feel free to share more information so I can provide relevant assistance.`}
        />
      </div>
      </div>
      <Footer />
    </div>
  );
}
