import React from "react";
import "./NavComponent.css";
import { SocialMediaComponent } from "./socialMedia/SocialMediaComponent";
import { Link } from "react-router-dom";

export const NavComponent = () => {
  return (
    <nav className="w-100 d-flex justify-content-between align-items-center py-3 bg-light">
      <ul className="d-flex justify-content-evenly align-items-center w-75 list-unstyled mb-0">
        <li className="p-1">
          <Link
            to="/home"
            className="text-decoration-none nav  p-md-2 containerMedia"
          >
            Home
          </Link>
        </li>
        <li className="p-1">
          <Link
            to="/proyects"
            className="text-decoration-none nav  p-md-2 containerMedia"
          >
            Proyects
          </Link>
        </li>
        <li className="p-1">
          <Link
            to="/aboutMe"
            className="text-decoration-none nav  p-md-2 containerMedia"
          >
            About
          </Link>
        </li>
        <li className="p-1">
          <Link
            to="/contact"
            className="text-decoration-none nav  p-md-2 containerMedia"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="ms-2 d-none d-md-block">
        <SocialMediaComponent />
      </div>
    </nav>
  );
};
