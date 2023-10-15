import React from "react";
import "../header/Header.css";
import { List, XCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export function Headeroption(props: any) {
  return (
    <li className={props.footerli}>
      <Link className={props.foota} to={props.to} target={props.footertarget}>
        {props.footaname}
        <span>{props.Headeroption}</span>
      </Link>
    </li>
  );
}

export function Header() {
  return (
    <div className=" all m-0 p-0 col-12 ">
    <nav  className="navbar navbar-expand-lg col-12 p-0 m-0">
      <div className="container-fluid  px-0 ">
        <a className="head-logo" href="/">
        
        <img
            src={require("../../../asset/sample1/schoollogo.png")}
            alt="paype logo"
            className="logo-circle mx-5"></img>
            
       
        </a>
        <a
          className="navbar-toggler border-0 mt-3"
          // style={{ marginRight: '15px' }}
          // type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fs-1 fa-solid fa-bars text-black  mx-3">
           
          </i>
        </a>
        <div
          className="offcanvas offcanvas-start-lg "
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header m-0 p-0 d-lg-none">
            <a className="head-logo m-0  d-flex " href="/" >
              <img
                src={require("../../../asset/sample1/schoollogo.png")}
                alt="logo"
                className="logo-circle mx-2"
              />
              {/* <img
                src={require("../../../../../asset/img/logo/paypelogotext.png")}
                alt="logo"
                className="logo-text"
              /> */}

              
            </a>
           
            <a
              href="javascript:void(0) "
              className="text-reset p-0 "
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
            
              <i className="fs-1  close fa-solid fa-close mx-3 ">
               
                {/* <XCircleFill /> */}

              </i>
                 
            </a>
            
          </div>
        <div className="line d-lg-none "></div>
          <div className="offcanvas-body  d-lg-flex justify-content-lg-end justify-content-satrt">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="#Homepage">
                  Home
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link " href="#AboutMe">
                About
                </a>
              </li>

             
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                Academics
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                Admission
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                Student Life
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                Alumni
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/ContactUs">
                Contact Us
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
    </nav>

      
      </div>
  );
}
