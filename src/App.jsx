import "./App.css";
import { AboutMeComponent } from "./components/aboutMe/AboutMeComponent";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { HeroComponent } from "./components/heroComponent/HeroComponent";
import { ProyectsComponent } from "./components/proyectsComponent/ProyectsComponent";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <ProyectsComponent></ProyectsComponent>
      <AboutMeComponent></AboutMeComponent>
    </>
  );
}

export default App;
