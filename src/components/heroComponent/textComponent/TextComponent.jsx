import React from "react";
import "./TextComponent.css";

export const TextComponent = () => {
  return (
    <div className="border border-2 border-black    d-flex justify-content-center containerSize ms-2  w-100 ">
      <div className="d-flex justify-content-center align-items-center container w-100">
        <div className="row text-center my-5">
          <div className="col-12 mb-4">
            <h2 className="display-4">Hi, Nice to Meet You!</h2>
            <h4 className="text-muted ">
              I'm José Antonio Román, a FullStack Developer
            </h4>
          </div>
          <div className="row text-center my-lg-2">
            <div className="col-12 ">
              <p className="lead">
                I have developed this portfolio in React with the aim of
                showcasing my projects created using different frameworks,
                highlighting the work I have done as a developer. Some of these
                projects were completed in collaboration with classmates or
                fellow developers, as you will notice below in each section.
              </p>
              <p>
                If you like it, don't forget to leave me some stars on GitHub
                and follow me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
