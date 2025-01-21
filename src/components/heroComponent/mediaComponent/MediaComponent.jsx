import React from "react";
import logo from "../../../assets/img/logo.png";
import "./MediaComponent.css";

export const MediaComponent = () => {
  return (
    <div className="border border-2 border-black d-flex justify-content-center align-items-center m-2 containerMedia w-50 ">
      <img src={logo} alt="" className="img-fluid  p-3" />
    </div>
  );
};
