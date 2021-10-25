import React from "react"
import App from "../App";
import logo from "../logo.png"
import css from "../App.css"
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import link from "react-router-dom"
import Aboutme from "./Aboutme";

export const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div className = "container">
  <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">about Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">contacts</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
};

export default Navbar;