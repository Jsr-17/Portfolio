import React from "react";
import { ClickOpenComponent } from "../components/clickOpenComponent/ClickOpenComponent";
import { LandingPageComponent } from "../components/landingPageComponent/LandingPageComponent";
import { ProyectsPageComponent } from "../components/proyectsPageComponent/index";
import { AboutMePageComponent } from "../components/aboutMePageComponent/index";
import { ContactPageComponent } from "../components/contactPageComponent/index";
import { Route, Routes } from "react-router-dom";

export const RouterAplication = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClickOpenComponent />}></Route>
        <Route path="/home" element={<LandingPageComponent />}></Route>
        <Route path="/proyects" element={<ProyectsPageComponent />}></Route>
        <Route path="/aboutMe" element={<AboutMePageComponent />}></Route>
        <Route path="/contact" element={<ContactPageComponent />}></Route>
        <Route
          path="/*"
          element={<LandingPageComponent></LandingPageComponent>}
        ></Route>
      </Routes>
    </div>
  );
};
