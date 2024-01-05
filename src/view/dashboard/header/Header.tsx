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
    <div className="header fixed-top " style={{ height: "75px" }}>
      <nav className="navbar  navbar-expand-md col-12  mx-auto  p-0">
        <div className="col-12 d-flex  align-items-center  p-0 m-0 h-100">
          <Link className="head-logo " to="/">
            <img
              src={require("../../../asset/sample1/linzlogo.png")}
              alt="paype logo"
              className="logo-circle mx-lg-5 mx-md-5 mx-0"
            />
          </Link>
          <Link
            className="navbar-toggler border-white  mx-1 mt-3  "
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offc6anvasExample"
            to={""}
          >
            <i className="fs-1 text-dark end">
              <List />
            </i>
          </Link>
          <div
            className="offcanvas offcanvas-start-md "
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header  d-flex d-md-none justify-content-around px-0"
              // style={{ borderBottom: "1px solid black" }}
            >
              <Link className="head-logo" to="/">
                <img
                  src={require("../../../asset/sample1/linzlogo.png")}
                  alt="paype logo"
                  className="logo-circle"
                />
              </Link>
              <Link
                to="javascript:void(0) "
                className="text-reset p-0 mb-3"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <i className="fs-1  close fa-solid fa-close mx-3">
                  {/* <XCircleFill /> */}
                </i>
              </Link>
            </div>
            <div className="offcanvas-body p-lg-0 ">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"#"}
                    data-bs-toggle="dropdown"
                  >
                    Products
                  </Link>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Recruit"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Subscription"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Backstage"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Mail"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Books"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho People"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Payroll"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho CRM"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho ONE"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Remotely"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Voice"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Assist"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho SalesIQ"}
                    />
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"#"}
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </Link>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Implementation"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Consulting"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Support"}
                    />
                     <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Training"}
                    />
                    </ul>
</li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={"/contactus"}>
                    Carrers
                  </Link>
                </li>


                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"#"}
                    data-bs-toggle="dropdown"
                  >
                    More
                  
                  </Link>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Contact Us"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Case Study"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Consult Online "}
                    />
                     <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"​Zoho CRM Training & Zoho DED"}
                    />
                     <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Streamlining Transition "}
                    />
                     <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Zoho Mail Migration "}
                    />
                     <Headeroption
                      foota={"dropdown-item"}
                      to={"/"}
                      footaname={"Privacy Policy "}
                    />
                     
                    </ul>
                 
</li>   
              </ul>
           
              {/* <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
