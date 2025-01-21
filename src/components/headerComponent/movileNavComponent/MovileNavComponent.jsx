import React, { useState } from "react";
import "./MovileNavComponent.css";
import { Link } from "react-router-dom";

export const MovileNavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container d-flex justify-content-end">
      <div
        className={`collapse navbar-collapse  ${isOpen ? "show " : ""}  `}
        id="navbarNav"
      >
        <ul className="navbar-nav text-center">
          <li className={`nav-item`}>
            <Link className="nav-link" href="#" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" href="#" to={"/home"}>
              About Me
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" href="#" to={"/home"}>
              Contact
            </Link>
          </li>
          <li className="nav-item mb-1 ">
            <Link className="nav-link" href="#" to={"/home"}>
              Projects
            </Link>
          </li>
        </ul>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarNav"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <div className="d-flex flex-column align-items-center">
          <span className="navbar-toggler-icon my-1"></span>
          <span className="navbar-toggler-icon my-1"></span>
          <span className="navbar-toggler-icon my-1"></span>
        </div>
      </button>
    </div>
  );
};
