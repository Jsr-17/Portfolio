import React from "react";
import logo from "../../../assets/img/img-me.jpeg";

export const HeroAboutMePageComponent = () => {
  return (
    <section className="container-fluid  d-flex align-items-center justify-content-center flex-column my-3">
      <h1 className="containerSize p-3 my-3">About Me</h1>
      <div className="row">
        <div className="col-lg-5 d-flex align-items-center justify-content-center col-12">
          <img
            src={logo}
            className="img-fluid containerSize border border-2 border-dark w-75"
            alt=""
          />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-12">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="p-3 bg-light text-dark border border-secondary rounded-3 shadow-lg my-3">
              <h2 className="text-center  display-4 fw-bold mb-4 ">
                Meet José!
              </h2>{" "}
              <p className="mb-3 fs-5">
                I am José Antonio Román Moreno, a passionate Fullstack
                Developer. Currently residing in Spain, I dream of embarking on
                a professional adventure abroad in the coming years, aiming to
                enrich both my personal and professional development.
              </p>
              <h3 className="text-secondary">-Passion for Programming</h3>
              <p className="mb-3 fs-5">
                My commitment to programming is deep. I thoroughly enjoy
                learning and applying new technologies, always seeking to
                enhance my skills and add value to every project. Artificial
                Intelligence is one of my great passions; in the future, I would
                love to specialize in this field to optimize complex processes
                in development, implementation, and learning, making life easier
                and more efficient for everyone.
              </p>
              <h3 className="text-secondary">-Experience</h3>
              <p className="mb-3 fs-5">
                Throughout my career, I have developed a versatile profile in
                the world of development. In the front-end, I have experience
                with JavaScript, working with both React and Angular, and in
                CSS, using frameworks like Bootstrap and Tailwind.
              </p>
              <p className="mb-3 fs-5">
                On the back-end, I have extensively worked with Java and Python,
                developing REST APIs, particularly with Express.js.
                Additionally, I have had the opportunity to use ASP.NET,
                Microsoft's powerful framework, in various projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
