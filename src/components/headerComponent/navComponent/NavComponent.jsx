import React from "react";
import "./NavComponent.css";
import { SocialMediaComponent } from "./socialMedia/SocialMediaComponent";

export const NavComponent = () => {
  return (
    <nav className="w-100 d-flex justify-content-between align-items-center py-3 bg-light">
      <ul className="d-flex justify-content-evenly align-items-center w-75 list-unstyled mb-0">
        <li className="p-2">
          <a href="#" className="text-decoration-none nav">
            Home
          </a>
        </li>
        <li className="p-2">
          <a href="#" className="text-decoration-none nav">
            Projects
          </a>
        </li>
        <li className="p-2">
          <a href="#" className="text-decoration-none nav">
            About Me
          </a>
        </li>
        <li className="p-2">
          <a href="#" className="text-decoration-none nav">
            Contact
          </a>
        </li>
      </ul>
      <div className="ms-3 d-none d-md-block">
        <SocialMediaComponent />
      </div>
    </nav>
  );
};
