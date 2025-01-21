import React from "react";
import "./AboutMeComponent.css";
import logo from "../../assets/img/logo.png";

export const AboutMeComponent = () => {
  return (
    <section className="container-fluid  mt-3">
      <div className="row d-flex align-items-center justify-content-center">
        <h2 className="col-12 text-center my-5">
          <span className=" p-3  containerMedia">About Me</span>
        </h2>
      </div>
      <div className="row d-flex align-items-center justify-content-around ">
        <div className="col-md-1"></div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center ">
          <div className="container text-center py-5  containerMedia  border border-2 border-dark">
            <h1 className="display-4">Hi World</h1>
            <p className="lead">
              It’s a pleasure to introduce myself. I'm passionate about learning
              programming and expanding my knowledge in both AI and process
              automation, particularly in the areas of application development
              and maintenance. I’m fascinated by how development empowers
              programmers to create powerful systems using simple lines of code
              and logic, making life significantly more convenient.
            </p>
          </div>
        </div>

        <div className="col-md-1"></div>
        <div className="col-12 col-md-3 d-flex align-items-center justify-content-center containerMedia mt-3 border border-2 border-dark">
          <img src={logo} alt="" className="img-fluid p-1 py-3 " />
        </div>
        <div className="col-md-1"></div>
      </div>
    </section>
  );
};
