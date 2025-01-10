import React from "react";

export const ProyectComponent = ({
  proyectName,
  proyectImg,
  proyectDescription,
}) => {
  return (
    <div className="col-12 col-lg-3 mt-4 d-flex flex-column align-items-center">
      <div className="text-center">
        <img src={proyectImg} alt="Project Image" className="" width="150" />
        <h3 className="mb-1">{proyectName}</h3>
        <p className="text-muted">{proyectDescription}</p>
      </div>
    </div>
  );
};
