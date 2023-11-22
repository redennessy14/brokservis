import React from "react";
import "./Navbar.css";
import LOGO from "../images/LOGO.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={LOGO} alt="" className="logo" />
    </div>
  );
};

export default Navbar;
