import React from "react";
import { HeaderComponent } from "../headerComponent";
import { FooterComponent } from "../footerComponent";
import { HeroAboutMePageComponent } from "./heroAboutMePageComponent/HeroAboutMePageComponent";
import { PiramidAboutMeComponent } from "./piramidAboutMeComponent/PiramidAboutMeComponent";
import { RouterAplication } from "../../router/RouterAplication";

export const AboutMePageComponent = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HeroAboutMePageComponent></HeroAboutMePageComponent>
      <PiramidAboutMeComponent></PiramidAboutMeComponent>
      <FooterComponent></FooterComponent>
    </>
  );
};
