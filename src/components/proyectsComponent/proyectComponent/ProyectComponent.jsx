import React from "react";

export const ProyectComponent = ({
  proyectName,
  proyectImg,
  proyectDescription,
}) => {
  return (
    <div className="col-12 col-lg-3 m-3 d-flex flex-column align-items-center">
      <div className="text-center ">
        <img src={proyectImg} alt="Project Image" className=" img-fluid" />
        <h3 className="my-3">{proyectName}</h3>
        <p className="text-muted">{proyectDescription}</p>
      </div>
    </div>
  );
};
