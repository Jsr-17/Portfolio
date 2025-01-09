import React from "react";
import linke from "../../assets/img/linke.png";
import github from "../../assets/img/github.png";
import "./SocialMediaComponent.css";

export const SocialMediaComponent = () => {
  return (
    <div className="w-25 d-flex justify-content-center  ">
      <ul className="d-flex list-unstyled align-items-center m-2  border border-2 border-dark p-2">
        <li className="mx-1 delSha">
          <a href="">
            <img src={linke} alt="" />
          </a>
        </li>
        <li className="ml-3">
          <a href="">
            <img src={github} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
