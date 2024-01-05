import React from "react";
import "../footer/Footer.css";

export function Footeroption(props: any) {
  return (
    <li className={props.footerli}>
      <h5 className={props.footheadclassname}>{props.footerhead}</h5>
      <a className="" href={props.href} target={props.footertarget}>
        {props.footaname}
        <span>{props.footeroption}</span>
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <div data-aos="zoom-in" className="main-footer">
      <div className="col-lg-11 mt-5 mx-auto py-4 ">
        <div className="row foot ">
          <div className="footimg col-12 col-md-3 col-lg-3">
            <img
              src={require("../../../asset/sample1/linzlogo.png")}
              alt="logo"
              className="img-fluid  mt-sm-4 "
            />
           
        
          </div>

          <div className="foot1 col-6 col-sm-4 col-md-3 col-lg-3 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3 "}
              footerhead={"PRODUCTS"}
            />
          
            <Footeroption href={"/"} footeroption={"Zoho Recruit"} />
            <Footeroption href={"/"} footeroption={"Zoho people"} />
            <Footeroption href={"/"} footeroption={"Zoho One"} />
            <Footeroption href={"/"} footeroption={"Zoho CRM"} />
            <Footeroption href={"/"} footeroption={"Zoho Payaroll"} />
            <Footeroption href={"/"} footeroption={"Zoho DED"} />
          </div>

          <div className="foot1 col-6 col-sm-4 col-md-3 col-lg-2 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3 "}
              footerhead={"Service"}

            />
           
            <Footeroption href={"/"} footeroption={"Zoho Implement"} />
            <Footeroption href={"/"} footeroption={"Zoho Consulting"} />
            <Footeroption href={"/"} footeroption={"Zoho Support"} />
            <Footeroption href={"/"} footeroption={"Zoho Training"} />
            {/* <Footeroption href={"/"} footeroption={"Quickbooks to Zoho Books Migration "} /> */}
            <Footeroption href={"/"} footeroption={"Zoho Mail Migration"} />
          </div>

          <div className="text-center col-12 col-sm-4 col-md-3 col-lg-3 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3"}
              footerhead={"CONNECT US"}
            />

           
<div className="d-flex justify-content-center">
<div className="icons d-flex justify-content-around col-lg-10 col-md-10 col-sm-10 col-8">
<a href="" className="inta"><i className="fab fa-facebook fs-2"></i> 
  </a >
  <a href="" className="inta"><i className="fab fa-instagram fs-2"></i> 
  </a >
  <a href="" className="twitter"><i className="fab fa-twitter fs-2"></i> 
  </a >
  <a href="" className="inkedin"><i className="fab fa-linkedin fs-2"></i> 
  </a>
 
  
  
</div></div>

            
          </div>
        </div>
      </div>
      <h6 className="text-center fw-light py-4 m-0">
        ©2024 LINZ Technogies-Expert ZOHO Consultants.
      </h6>
    </div>
  );
}
