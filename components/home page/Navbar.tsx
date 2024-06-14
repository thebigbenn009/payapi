import React from "react";
import NavLeft from "./NavLeft";

const Navbar = () => {
  return (
    <div className="nav-div">
      <nav className="wrapper">
        <NavLeft />
        <div className="nav-right">
          <button className="btn btn-large nav-btn">Scheule a Demo</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
