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

<h3 data-aos="fade-left" data-aos-duration="2000" data-aos-once="true" className="text-center p-4 Teacher"><span>OUR </span>SERVICES</h3>
<p data-aos="fade-right" data-aos-duration="2000"  className="heater-p  text-center container lh-lg  ">

Linz Technologies, located in Chennai, 
 as a Zoho Authorized partner, offering unparalleled consulting, implementation
 , support, and training services for the Zoho suite of Products worldwide.
  Our expertise spans the entire globe, ensuring top-notch solutions for Zoho's comprehensive range of offerings. We specialize in providing tailored guidance, execution, and ongoing assistance, empowering businesses with robust Zoho solutions. Trust us to deliver industry-leading support and training, enhancing your experience with Zoho's suite of innovative products.

</p>

<div className="services-cantainer container-fluid flex-wrap col-12 d-flex justify-content-center ">
<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="2000" className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Consulting</h2>
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>
<button className="btn ">Know More</button>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Deployment</h2>
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>
  <button className="btn ">Know More</button>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="2000" className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Support</h2>
  
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>

<button className="btn ">Know More</button>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="2000" className="service-box  p-3 mt-3 d-flex flex-column justify-content-around">
  <h2><span>Zoho</span>Training</h2>
  <p>Embarking on Zoho Solutions? Our adept team ensures success—technical, business skills, long-term goals, integrations, and customizations. Consult our industry experts for seamless implementation and triumph in your journey</p>
  <button className="btn ">Know More</button>
</div>
</div>


<div className=" heading  p-4  mt-5">
<h3 data-aos="fade-down-left" data-aos-duration="2000"  className="text-center Teacher  p-4 ">TRY ZOHO FOR<span> FREE - TRIAL</span></h3>
<p data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="heater-p  text-center container lh-lg  ">

Linz Technologies, located in Chennai, 
 as a Zoho Authorized partner, offering unparalleled consulting, implementation
 , support, and training services for the Zoho suite of Products worldwide.
Our expertise spans the entire globe, ensuring top-notch solutions for Zoho's comprehensive range of offerings. We specialize in providing tailored guidance, execution, and ongoing assistance, empowering businesses with robust Zoho solutions. Trust us to deliver industry-leading support and training, enhancing your experience with Zoho's suite of innovative products.

</p>

<div className="freetryal-cantainer  container-fluid flex-wrap col-12 d-flex justify-content-center ">
<div data-aos="fade-up"
     data-aos-anchor-placement="center-center"  className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-text ">
  <h4 className="fw-bold">
  
  <span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span>ONE FREE TRIAL</h4>
  <p>Sign-in ZOHO ONE for FREE Trial</p>
<button className="btn ">Zhoho Free one Trail</button></div>
</div>

<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="2000" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-text "><h4 className="fw-bold"><span>ZOHO</span>WORKPLACE / MAIL FREE TRIAL</h4>
  <p>Sign-in ZOHO PEOPLE for FREE Trial</p>
<button className="btn ">Zhoho Free Inventory Trail</button></div>
</div>


<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span>RECRUIT FREE TRIAL</h4>
  <p>Sign-in ZOHO CRM for FREE Trial</p>
<button className="btn ">Zhoho Free Recruit Trail</button></div>
</div>

<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> CRM FREE TRIAL</h4>
  <p>Sign-in ZOHO RECRUIT for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> DESK FREE TRIAL</h4>
  <p>Sign-in ZOHO DESK for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>

<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> INVENTORY FREE TRIAL</h4>
  <p>Sign-in ZOHO INVENTORY for FREE Trial</p>
<button className="btn ">Zhoho Free Inventory Trail</button></div>
</div>

<div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="freetryal-box  p-3 mt-3 text-center
d-flex flex-column justify-content-center align-items-center">
<div className="box-tex "><h4 className="fw-bold"><span>ZOHO</span> BOOKS FREE TRIAL</h4>
  <p>Sign-in ZOHO BOOKS for FREE Trial</p>
<button className="btn ">Zhoho Free Trail</button></div>
</div>
</div>
</div>

<div className="typograpy-page mt-5 text-center container-fluid">

  <p data-aos="fade-up" className="h5 container text-center p-3 mb-0">Looking for the best zoho consulting partner?
Then, you are at the right place! Choose Linz Technologies. The ultimate Zoho Partner</p>

<div className="typ-heard-para container mt-3">
<h5 data-aos="fade-right" className="p-3 fw-bold"><span>ZOHO CRM</span> & MARKETING AUTOMATION</h5>
<p data-aos="fade-up" className="typ-pragrah lh-lg">Empower your sales and marketing teams to create impactful strategies with Zoho solutions. Capture data effectively and view analytics to make proper business decisions. The end-to-end solutions by different applications can improve your performance drastically. In addition, the sales team when equipped with powerful tools and deeper customer insights can improve the buyer's journey. ZOHO CRM helps you to manager the sales team Leads and help you nurture them. It also help in tracking the Sales Pipeline by qualifying the leads. The Sales pipeline can be managed across the entire team. The sales team will be also able to do Sales Forecasting using ZOHO CRM.</p>
</div>

</div>


<div className="typograpy-page bg-white mt-2 text-satrt container-fluid">



<div className="typ-heard-para container mt-3">
<h5 data-aos="fade-left" className="p-3 fw-bold text-center">Why Linz Technologies & as your Zoho Partner?</h5>
<p  data-aos="fade-up" className="typ-pragrah ">Linz Technologies is a Zoho Partners based out of Chennai and offers the best Consulting, Implementation, Support and Training services for Zoho products globally. Linz technologies has highly experienced Zoho consultants who understands business process across industries and proposes the Industry standard best practiced solution for your business. Linz Technologies offer complete Business Automation for small and medium enterprises (SME's). With a team of experts, Linz Technologies is ready to offer you the best quality services in the industry..</p>

<p data-aos="fade-up" className="mt-2 typ-pragrah">Linz has been Awarded as "ZOHO PARTNER OF THE YEAR - 2022" & "ZOHO SKILL CHAMPION" in India and Dubai respectively.</p>
<p data-aos="fade-up" className="mt-2 typ-pragrah">Our mission is to be the most influential solution-focused Zoho Implementation Partner across the global. With deep expertise, we are committed to helping customers to boost their business productivity using Zoho Implementation tools.</p>
<ul  data-aos="fade-up" className="m-0 p-0 mx-3">
  <li className=""><p>We are best at what we do:</p></li>
  <li className=""><p>7+ years of experience</p></li>
  <li className=""><p>1000+ satisfied customers across global</p></li>
  <li className=""><p>Team of Industry experts </p></li>
  <li className=""><p>24*7 support:</p></li>
   <li className=""><p>Offer powerful business automation for small and medium enterprises.</p></li>
  
</ul>

<p data-aos="fade-up">We have the expertise for ZOHO Sales IQ, Social, Campaigns, CRM, Desk, Books, Inventory, Expense, Payroll, Subscriptions, Forms, Bigin, Sign, Survey, Commerce, Marketing Automation, Bookings, Workplace (Mail, Sheets, Show, Cliq, Voice, Meeting, Workdrive, Projects, Sprints, Recruit, People, Payroll, Contracts, Vault, Assist, MDM, Creator, Catalyst, Flow, Analytics etc.. We have a dedicated team of in-house ZOHO Consultants certified to meet your business needs.</p>
<p data-aos="fade-up" className="mt-2 typ-pragrah">Call Linz for a Free 2 Hrs Consulting today!!!</p>

<div data-aos="zoom-in"  className="typ-button d-flex justify-content-center"> <button type="button" className="btn ">
REQUEST IMPLEMENTATION QUOTE</button> </div>
</div>


<div className="clients-chose text-center p-0 p-4 mt-4 mb-0">
<div className="typ-heard-para container mt-3">
<h5 data-aos="fade-left"  className="p-3 fw-bold r"><span>Why Clients </span>choose us?</h5>
<p data-aos="fade-right"  className="typ-pragrah lh-lg ">Most customer choose us because we are a ZOHO Premium Partner with 1500+ ZOHO Implementation experience. We provide Certified ZOHO Consultants for Project Implementation. Be in sync with your customer needs and deliver them constantly. Get everything you need to be ready for your customers with the help of our experts. We ensure that your sales, and marketing performance excels as we offer a wide range of services that get your business ready - from Zoho Implementation to technical support!
</p>

<div className="services-cantainer container-fluid flex-wrap col-12 d-flex justify-content-center ">

<div data-aos="fade-up"  className="service-box-clind  p-3 mt-3 d-flex flex-column justify-content-center " >
  <h2><span>Our Team</span></h2>
  <p>Our Pro Certified ZOHO Consultants in our team identifies the significant factors for a fast emerging business.</p>
  
</div>
<div data-aos="fade-down"  className="service-box-clind  p-3 mt-3 d-flex flex-column justify-content-center">
  <h2><span>Our Values</span></h2>
  
  <p>We as Zoho solution provider provide transparency with our customers and alo provide expertise solutions to automate your business.</p>


</div>
<div data-aos="fade-up" className="service-box-clind  p-3 mt-3 d-flex flex-column justify-content-center">
  <h2><span>Our Work</span></h2>
  <p>We as Zoho premium partner provide experienced zoho consultants to our customers to help with Successful Zoho Implementation
</p>
</div>
</div>
</div>
</div>

</div>

<div className="clients-chose bg-white text-center p-0 p-4 mt-4 mb-0">
<div className="typ-heard-para container mt-3">
<h5 data-aos="fade-down-left" className="p-3 fw-bold r">Looking for<span> ZOHO CRM PARTNERS ? Zoho CRM Partners</span></h5>
<p data-aos="fade-down-right" className="typ-pragrah lh-lg ">Are your looking for an expert ZOHO CRM Partners? You have reach the right experts... Linz Technologies is an expert zoho crm reseller and has been Awarded "Partner of the Year 2022" by ZOHO.
</p>

<h4 data-aos="fade-down-up" className="fw-bold"><span >ZOHO CRM </span>FEATURES</h4>

<div className="services-cantainer container-fluid flex-wrap col-12 d-flex justify-content-center ">

<div data-aos="fade-up" className="service-box-crm  p-3 mt-3 d-flex flex-column justify-content-center " >
  <h2>Meet at ease</h2>
  <p>Conduct sales meetings, webinars and presentations right from your CRM. Analyze the reports and track performance at ease.</p>
  
</div>
<div data-aos="fade-down" className="service-box-crm  p-3 mt-3 d-flex flex-column justify-content-center">
  <h2>Never miss out a lead</h2>
  
  <p>We as Zoho solution provider provide transparency with our customers and alo provide expertise solutions to automate your business.</p>


</div>
<div data-aos="fade-up" className="service-box-crm  p-3 mt-3 d-flex flex-column justify-content-center">
  <h2>Get real-time insights</h2>
  <p>Measure and track performance with real-time analytics and make smarter business decisions.
</p>
</div>
</div>
</div>
</div>
</div>


      <Footer/>
    </div>
  );
};
