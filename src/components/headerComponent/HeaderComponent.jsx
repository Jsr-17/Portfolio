import logo from "../../assets/img/logo.png";
import "./HeaderComponent.css";
import { NavComponent } from "./navComponent/NavComponent";
import { MovileNavComponent } from "./movileNavComponent/MovileNavComponent";
import { useEffect, useState } from "react";

export const HeaderComponent = () => {
  //This hook is necesary for control the state of the width and aply modifies to the state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 765);

  //With this hook we control the event of the resize and modify the state to change to the mobile
  useEffect(() => {
    //this funtion is the handle to make to the switch the variable to the state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 765);
    };
    //Aply a event with the listen the changing of the with the device and call the handle of the previous state
    window.addEventListener("resize", handleResize);

    //clear the  event to prevent add more listener when the state change
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-light-subtle m-2 border border-2 border-dark d-flex justify-content-around align-content-center ">
      <img src={logo} alt="Logo Personal" className="m-2 mt-3 me-sm-5" />
      {isMobile ? <MovileNavComponent /> : <NavComponent />}
    </header>
  );
};
