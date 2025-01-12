import React from "react";
import "./FooterComponent.css";

export const FooterComponent = () => {
  return (
    <footer className="mt-4  mb-1 border border-2 border-dark containerMedia  ">
      <div className="row text-center ">
        <div className="ms-2 col-12 mt-3">
          <h6>Jose Antonio Román Moreno</h6>
        </div>
        <div className="small">
          <ul className="list-unstyled d-flex justify-content-center mb-0 col-12 my-1 ">
            <li className="mx-2">
              <a href="" className="text-dark text-decoration-none  link">
                Home
              </a>
            </li>
            <li className="mx-2">
              <a href="" className="text-dark text-decoration-none  link">
                Projects
              </a>
            </li>
            <li className="mx-2">
              <a href="" className="text-dark text-decoration-none  link">
                About Me
              </a>
            </li>
            <li className="mx-2">
              <a href="" className="text-dark text-decoration-none link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className=" text-center col-12 my-2">
          <p className="mb-0">&copy; 2025 Jose Antonio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
