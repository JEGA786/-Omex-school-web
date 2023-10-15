import { Mail } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Contactus() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="contactus" id="contactus">
          <h1
            data-aos="slide-right" data-aos-duration="2000"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Contact us
          </h1>
        </div>

        <div className="py-md-5 py-2">
          <h1 data-aos="fade-right" data-aos-duration="2000" className="text-center fw-bold">
            We are here to help
          </h1>
          <div
            className="d-flex flex-wrap col-md-11 mx-auto"
            data-aos="fade-up" data-aos-duration="2000"
          >
            <Mail
              icon={"fa fa-mobile"}
              p1={`+91 7048000044`}
              p2={`(7:00 AM to 11:00 PM, All days)`}
            />
            <Mail icon={"fa-solid fa-building"} p1={`807A, Suite105, 1, Pillaiyar Koil St, MCN Nagar Extension, Thoraipakkam, Tamil Nadu 600097`} />
            <Mail 
              icon={"fa fa-envelope"}
              p2={`vjayakumar@omnex.com`}
            />
          </div>
        </div>

        <div className="col-lg-11 col-12 mx-auto d-flex p-0 flex-wrap ">
          <div className="col-md-6 col-12 p-3" data-aos="fade-up" data-aos-duration="2000">
           
 <h3 className="fw-bold fs-2  text-lg-start text-md-start text-center">Fill the form to Connect with us</h3>
 <form
              className="mt-3"
              action="mailto:jega183000@gmail.com"
              method="post"
              encType="text/plain"
            >
               <div className="about-input col-12 py-4  ">
             
<div className=" names-inpute d-flex flex-wrap justify-content-between align-items-center  p-0 mx-0">
              <input
                className="col-6 "
                name="firstname"
                type="text"
                placeholder="First Name"
                required
              />
               <input
                className="col-5 "
                name="Lastname"
                type="text "
                placeholder="Last Name"
                required
              /></div>
              <div className="d-flex flex-wrap justify-content-between">
                <input
                  className=" col-12"
                  type="text"
                  name="mail"
                  placeholder="E-mail"
                  required
                />
                <input
                  className=" col-12"
                  type="number"
                  name="number"
                  placeholder="Number"
                  required
                />
              </div>
              <textarea
                className="col-12 "
                name="Message"
                placeholder="Message"
                required
              />

<input
                  className="submit "
                  type="submit"
                  value="Send "
                ></input>
            </div></form>
          </div>
          <div className="col-md-6 col-12  m-0 p-0  rounded" data-aos="zoom-in" data-aos-duration="2000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.376832284313!2d80.23465267428648!3d12.94772181540298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f7661346c9%3A0x8d6f0c0d0ed99260!2sOmnex%20Software%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1697284135096!5m2!1sen!2sin" 
              className="map h-100 col-12 p-0 m-0 rounded"
              loading="lazy"
            ></iframe>


            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
