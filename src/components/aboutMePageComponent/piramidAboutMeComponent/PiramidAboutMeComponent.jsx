import React, { useState, useEffect } from "react";
import {
  RiJavascriptLine,
  RiTailwindCssLine,
  RiBootstrapLine,
} from "react-icons/ri";
import { FaReact, FaAngular, FaJava, FaNodeJs } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandMongodb } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

export const PiramidAboutMeComponent = () => {
  //This hook is needed to change the state to the mobile version some css styles to be more responsive
  const [isMobile, setMobile] = useState(window.screen.width < 992);

  //I use this hook to detect a change in the state of the size of the windows of the navigator to detect
  useEffect(() => {
    //this funtion is the handle of the useState is used to change the state of the mobile detecting the window size
    const handleSetMobile = () => {
      setMobile(window.screen.width < 992);
    };

    window.addEventListener("resize", handleSetMobile);

    return () => {
      window.addEventListener("resize", handleSetMobile);
    };
  }, []);

  return (
    <section className="d-flex justify-content-center align-items-center flex-column">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center ">
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <RiJavascriptLine size={"80%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <FaReact size={"80%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <FaAngular size={"80%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <RiTailwindCssLine size={"80%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <RiBootstrapLine size={"80%"} />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center ">
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <FaJava size={"60%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <AiOutlinePython size={"80%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center  ${
              isMobile ? "w-75" : ""
            }`}
          >
            <FaNodeJs size={"75%"} />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center ">
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75 py-1" : "p-0"
            }`}
          >
            <TbBrandMongodb size={"60%"} />
          </div>
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75" : ""
            }`}
          >
            <SiMysql size={"80%"} />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center ">
          <div
            className={`col-lg-2 containerSize m-3 d-flex justify-content-center align-items-center ${
              isMobile ? "w-75 py-1" : "p-0"
            }`}
          >
            <FaGitAlt size={"60%"} />
          </div>
        </div>
      </div>
    </section>
  );
};
