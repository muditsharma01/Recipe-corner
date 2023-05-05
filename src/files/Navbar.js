import React from "react";
import './Nav.css'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top logo"
            />
            <span className="brand-name">Recipe Corner</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
