import React from "react";
import { ProyectComponent } from "./proyectComponent/ProyectComponent";
import "./ProyectsComponent.css";
class Proyect {
  constructor(proyectName, proyectImg, proyectDescription) {
    this.proyectName = proyectName;
    this.proyectImg = proyectImg;
    this.proyectDescription = proyectDescription;
  }
}

export const ProyectsComponent = () => {
  const proyecto1 = new Proyect(
    "ejemplo",
    "src/assets/img/logo.png",
    "texto de ejemplo"
  );

  return (
    <section className="d-flex align-items-center justify-content-center container  mt-5">
      <div className="row w-100 d-flex align-items-center justify-content-center">
        <h2 className="col-12 text-center my-5">
          <span className=" p-3  containerMedia">Projects</span>
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-1 row containerMedia  border border-2 border-dark py-4">
          <ProyectComponent {...proyecto1} />
          <ProyectComponent {...proyecto1} />
          <ProyectComponent {...proyecto1} />
          <div className="mb-2"></div>
          <div className="d-flex justify-content-center align-items-center gap-4 row">
            <p className="text-center text-muted">
              If you'd like to see how I work and explore the source code of my
              projects ----{">"}
              <a
                href="https://github.com/Jsr-17"
                className="github-link"
                target="_blank"
              >
                there is a link of my Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
