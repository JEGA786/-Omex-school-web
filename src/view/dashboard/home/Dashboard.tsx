import "./Dashboard.styles.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../../../component/Layout.css";
import {
  Headertexts,
  Testimonial,
  linzService,
 
} from "../../../component/Layout";
import React from "react";

export function Dashboard() {
  return (
    <div className="main">
      <Header />
      {/* <div className="home ">
      
        <div className="text-cantainer col-12  z-1 d-flex justify-content-center align-items-center">
          <div className="text-layar  text-white d-flex justify-content-center align-items-center">
<div className="texts   w-75">
        <h4 className=" ">10+ Years Experienced ZOHO Partner</h4>
          <h2>ZOHO PARTNER & EXPERT ZOHO CONSULTANTS</h2>
          <p className="col-10 p-0 m-0">Expand your Business with ZOHO ONE and suite of applications with your most trusted ZOHO PARTNER awarded for "SKILL CHAMPION" by ZOHO Corp.</p>
<div className="buttens-home"><button className="btn-1 btn rounded mt-2 ">Get Start</button>
<button className=" mx-4 btn-2 btn rounded mt-2 text-light">Get Start</button></div>
          </div>
</div>
        </div>
      </div> */}


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

{/* <Headertexts
  h3={
    "Nurturing Growth Through Education"
  }
  p={
    "Nurturing Growth Through Education: Fostering a foundation for knowledge, cultivating curiosity, and shaping bright minds for a promising future. Encouraging critical thinking, instilling a passion for lifelong learning, and promoting values that contribute to personal and societal development. Creating an inclusive and innovative educational environment that nurtures individual talents and diverse perspectives. Emphasizing the importance of character development alongside academic excellence. Building bridges to global awareness, fostering collaboration, and preparing students to navigate the challenges of a rapidly evolving world. "  }
/> */}

<h3 className="text-center p-4 Teacher"><span>OUR </span>SERVICES</h3>
<p className="heater-p  text-center container lh-lg  ">

Linz Technologies, located in Chennai, 
 as a Zoho Authorized partner, offering unparalleled consulting, implementation
 , support, and training services for the Zoho suite of Products worldwide.
  Our expertise spans the entire globe, ensuring top-notch solutions for Zoho's comprehensive range of offerings. We specialize in providing tailored guidance, execution, and ongoing assistance, empowering businesses with robust Zoho solutions. Trust us to deliver industry-leading support and training, enhancing your experience with Zoho's suite of innovative products.

</p>

<div className="services-cantainer container-fluid flex-wrap col-12 d-flex justify-content-center ">
<div className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Consulting</h2>
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>
<button className="btn ">Know More</button>
</div>
<div className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Deployment</h2>
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>
  <button className="btn ">Know More</button>
</div>
<div className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Support</h2>
  
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>

<button className="btn ">Know More</button>
</div>
<div className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Training</h2>
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>
  <button className="btn ">Know More</button>
</div>
</div>


<div className=" heading  p-4  mt-5">
<h3 className="text-center Teacher  p-4 ">TRY ZOHO FOR<span> FREE - TRIAL</span></h3>
<p className="heater-p  text-center container lh-lg  ">

Linz Technologies, located in Chennai, 
 as a Zoho Authorized partner, offering unparalleled consulting, implementation
 , support, and training services for the Zoho suite of Products worldwide.
Our expertise spans the entire globe, ensuring top-notch solutions for Zoho's comprehensive range of offerings. We specialize in providing tailored guidance, execution, and ongoing assistance, empowering businesses with robust Zoho solutions. Trust us to deliver industry-leading support and training, enhancing your experience with Zoho's suite of innovative products.

</p>

<div className="freetryal-cantainer  container-fluid flex-wrap col-12 d-flex justify-content-center ">
<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-text ">
  <h4 className="fw-bold">
  
  <span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>


<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>
</div>
</div>

<div className="typograpy-page mt-5">

  <p className="h5 container text-center p-5 ">Looking for the best zoho consulting partner?
Then, you are at the right place! Choose Linz Technologies. The ultimate Zoho Partner</p>
</div>

</div>


      <Footer />
    </div>
  );
};
