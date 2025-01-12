import React from "react";
import { FooterComponent } from "../footerComponent";
import { AboutMeComponent } from "../aboutMeComponent";
import { ProyectsComponent } from "../proyectsComponent";
import { HeaderComponent } from "../headerComponent";
import { HeroComponent } from "../heroComponent";

export const LandingPageComponent = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <ProyectsComponent></ProyectsComponent>
      <AboutMeComponent></AboutMeComponent>
      <FooterComponent></FooterComponent>
    </>
  );
};
