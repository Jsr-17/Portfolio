import React from "react";
import linke from "../../../../assets/img/linke.png";
import github from "../../../../assets/img/github.png";
import "./SocialMediaComponent.css";

export const SocialMediaComponent = () => {
  return (
    <div className="w-25 d-flex justify-content-center  ">
      <ul className="d-flex list-unstyled align-items-center m-1  border border-2 border-dark p-2 containerMedia">
        <li className="mx-md-1 ">
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-antonio-rom%C3%A1n-moreno/"
            target="_blank"
          >
            <img src={linke} alt="" />
          </a>
        </li>
        <li className="ml-md-3">
          <a href="https://github.com/Jsr-17" target="_blank">
            <img src={github} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
