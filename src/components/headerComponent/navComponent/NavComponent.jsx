import React from "react";
import "./NavComponent.css";
import { SocialMediaComponent } from "./socialMedia/SocialMediaComponent";

export const NavComponent = () => {
  return (
    <nav className="w-100 d-flex justify-content-between align-items-center py-3 bg-light">
      <ul className="d-flex justify-content-evenly align-items-center w-75 list-unstyled mb-0">
        <li className="p-1">
          <a
            href="#"
            className="text-decoration-none nav  p-md-2 containerMedia"
          >
            Home
          </a>
        </li>
        <li className="p-1">
          <a
            href="#"
            className="text-decoration-none nav p-md-2 containerMedia"
          >
            Projects
          </a>
        </li>
        <li className="p-1">
          <a
            href="#"
            className="text-decoration-none nav p-md-2 containerMedia"
          >
            About Me
          </a>
        </li>
        <li className="p-1">
          <a
            href="#"
            className="text-decoration-none nav  p-md-2 containerMedia"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="ms-2 d-none d-md-block">
        <SocialMediaComponent />
      </div>
    </nav>
  );
};
