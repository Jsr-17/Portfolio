import React from "react";
import { ProyectComponentProyectPage } from "./proyectComponentProyectPage/ProyectComponentProyectPage";

class Proyect {
  constructor(proyectName, proyectImg, proyectDescription) {
    this.proyectName = proyectName;
    this.proyectImg = proyectImg;
    this.proyectDescription = proyectDescription;
  }
}

export const HeroProyectsPageComponent = () => {
  const proyecto1 = new Proyect(
    "ejemplo",
    "src/assets/img/logo.png",
    "texto de ejemplo"
  );
  return (
    <div className="container-fluid mt-3">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row my-2">
          <h2 className="text-center col-12 col-md-6 my-4">
            <span className="containerMedia p-3 ">Section Proyects</span>
          </h2>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center containerMedia p-3">
            <h2
              className="text-center mb-4"
              style={{ fontSize: "2rem", color: "#333" }}
            >
              My Programming Projects
            </h2>
            <p
              className="text-center"
              style={{ color: "#555", fontSize: "1.1rem" }}
            >
              In this portfolio, you will find a variety of programming projects
              that showcase my skills in web development, automation, and more.
              Each project is designed to solve real-world problems efficiently
              and effectively. Explore and see what I can create!
            </p>
            <a
              href="https://github.com/Jsr-17"
              className="btn btn-dark mt-3"
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "5px",
              }}
              target="_blank"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-1 "></div>
        <div className="col-lg-3 my-2 ">
          <ProyectComponentProyectPage
            {...proyecto1}
          ></ProyectComponentProyectPage>
        </div>
        <div className="col-lg-4 "></div>
        <div className="col-lg-3 my-2">
          <ProyectComponentProyectPage
            {...proyecto1}
          ></ProyectComponentProyectPage>
        </div>
        <div className="col-lg-1 "></div>
      </div>
      <div className="row p-lg-5 my-3">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 ">
          <ProyectComponentProyectPage
            {...proyecto1}
          ></ProyectComponentProyectPage>
        </div>
        <div className="col-lg-4"></div>
      </div>
      <div className="row my-3">
        <div className="col-lg-1 "></div>
        <div className="col-lg-3 my-2 ">
          <ProyectComponentProyectPage
            {...proyecto1}
          ></ProyectComponentProyectPage>
        </div>
        <div className="col-lg-4 "></div>
        <div className="col-lg-3 my-2">
          <ProyectComponentProyectPage
            {...proyecto1}
          ></ProyectComponentProyectPage>
        </div>
        <div className="col-lg-1 "></div>
      </div>
    </div>
  );
};
