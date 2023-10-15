import React from "react";
import "../component/Layout.css";
import { Link } from "react-router-dom";



export function Headertexts(props: any) {
  return (
    <div className="d-flex justify-content-center ">
      <div className="text-center 
       Headertexts d-flex justify-content-center flex-column align-items-center  col-lg-10  col-12 mt-4">
        <h3 className="col-lg-6 col-md-6 col-sm-7 col-12 p-3">{props.h3}</h3>
        <p className="pregraphtext lh-lg ">{props.p}</p>
      </div>
    </div>
  );
}

export function Testimonial(props: any) {
  return (
    <div className="test-div" data-aos="zoom-in">
     <div className="testimonial-div"> <img className="img-fluid test-img" src={props.img} alt="testimonial" /></div>
      <h2 className="">{props.h2}</h2>
      <h4 className="">{props.h4}</h4>
      <p className="p1">{props.p1}</p>
      <p className="" style={{ fontWeight: "500", lineHeight: "28px" }}>
        {props.p2}
        <p className="pt-3">{props.p3}</p>
      </p>
    </div>
  );
}









export function Mail(props: any) {
  return (
    <div className="col-md-4 col-12 mx-auto d-flex flex-column align-items-center mail py-3">
      <i className={props.icon}></i>
      <p className="mt-3">{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
}

export function Input(props: any) {
  return (
    <div
      data-aos="slide-up"
      data-aos-duration="2000"
      className="input-div col-lg-10 col-md-11 col-sm-7 col-12 "
    >
      <i className={props.icon}></i>
      <input
        className="input-field "
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className={props.bar}></span>
    </div>
  );
}

