import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

import "./HeaderComponent.css";
import { NavComponent } from "../navComponent/NavComponent";

export const HeaderComponent = () => {
  return (
    <header className="bg-light-subtle  m-2  border border-2 border-dark d-flex  justify-content-around align-content-center">
      <img src={logo} alt="Logo Personal" className="m-2 mt-3" />
      <NavComponent></NavComponent>
    </header>
  );
};
