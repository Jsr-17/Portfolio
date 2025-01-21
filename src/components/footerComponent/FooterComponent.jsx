import React from "react";
import "./FooterComponent.css";
import { Link } from "react-router-dom";

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
              <Link
                href=""
                className="text-dark text-decoration-none  link"
                to={"/home"}
              >
                Home
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href=""
                className="text-dark text-decoration-none  link"
                to={"/proyects"}
              >
                Projects
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href=""
                className="text-dark text-decoration-none  link"
                to={"/aboutMe"}
              >
                About Me
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href=""
                className="text-dark text-decoration-none link"
                to={"/contact"}
              >
                Contact
              </Link>
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
