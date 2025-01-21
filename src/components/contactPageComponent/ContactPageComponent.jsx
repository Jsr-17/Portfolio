import React from "react";
import { HeaderComponent } from "../headerComponent/index";
import { FooterComponent } from "../footerComponent/index";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactPageComponent = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h1 className="text-center p-2 mt-4 mb-2">
        <span className="containerSize p-3">Contact me :</span>
      </h1>
      <section className="d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <div className="row  d-flex align-items-center justify-content-center  my-4 ">
            <div className="container border border-2 border-dark rounded-3 p-4 containerSize">
              <div className="row">
                <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-3 mb-md-0">
                  <h4>Linkedin</h4>
                  <p className="d-flex align-items-center">
                    <FaLinkedin className="me-2" size="1.5em"></FaLinkedin>
                    <a
                      href="https://www.linkedin.com/in/jos%C3%A9-antonio-rom%C3%A1n-moreno/"
                      className="text-decoration-none"
                    >
                      Go to Linkedin
                    </a>
                  </p>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-3 mb-md-0">
                  <h4>Email</h4>
                  <p className="d-flex align-items-center">
                    <MdEmail className="me-2" size="1.5em"></MdEmail>
                    <span>Jarmoreno5@gmail.com</span>
                  </p>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                  <h4>Instagram</h4>
                  <p className="d-flex align-items-center">
                    <FaInstagram className="me-2" size="1.5em"></FaInstagram>
                    <span>Jsr-17Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </>
  );
};
