import React from "react";
import { HeaderComponent } from "../headerComponent";
import { FooterComponent } from "../footerComponent";
import { HeroProyectsPageComponent } from "./heroProyectsPageComponent/HeroProyectsPageComponent";

export const ProyectsPageComponent = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HeroProyectsPageComponent></HeroProyectsPageComponent>
      <FooterComponent></FooterComponent>
    </>
  );
};
