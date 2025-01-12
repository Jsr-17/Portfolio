import React from "react";

export const ProyectComponentProyectPage = ({
  proyectName,
  proyectImg,
  proyectDescription,
}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div
        className="border border-1 border-dark p-5 w-100 containerMedia"
        style={{
          maxWidth: "600px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        <img
          src={proyectImg}
          alt={`Imagen del proyecto ${proyectName}`}
          className="img-fluid mb-4"
          style={{ width: "auto", margin: "0 auto", display: "block" }}
        />
        <h3 className="text-center" style={{ fontSize: "2rem", color: "#333" }}>
          {proyectName}
        </h3>
        <p className="text-center" style={{ color: "#666", fontSize: "1rem" }}>
          {proyectDescription}
        </p>
      </div>
    </div>
  );
};
