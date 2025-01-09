import React from "react";
import "./NavComponent.css";
import { SocialMediaComponent } from "../socialMedia/SocialMediaComponent";

export const NavComponent = () => {
  return (
    <nav className="w-100 d-flex ms-2">
      <ul className="d-flex justify-content-evenly align-items-center w-100 list-unstyled mt-3">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Proyects</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <SocialMediaComponent></SocialMediaComponent>
    </nav>
  );
};
