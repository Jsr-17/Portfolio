import React from "react";
import "./HeroComponent.css";
import { TextComponent } from "./textComponent/TextComponent";
import { MediaComponent } from "./mediaComponent/MediaComponent";

export const HeroComponent = () => {
  return (
    <section className="d-flex  align-items-center  justify-content-around m-3 mt-1 row">
      <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-center mb-4 mb-md-0 ">
        <MediaComponent />
      </div>
      <div className="col-12 col-md-7 col-lg-6 d-flex justify-content-center mt-md-3">
        <TextComponent />
      </div>
    </section>
  );
};
