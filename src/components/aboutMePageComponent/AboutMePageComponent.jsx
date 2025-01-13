import React from "react";
import { HeaderComponent } from "../headerComponent";
import { FooterComponent } from "../footerComponent";
import { HeroAboutMePageComponent } from "./index";

export const AboutMePageComponent = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HeroAboutMePageComponent></HeroAboutMePageComponent>

      <FooterComponent></FooterComponent>
    </>
  );
};
