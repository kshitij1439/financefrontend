import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ backgroundColor: "#FFF" }}>
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-3">
              <Link className="nav-link" to="https://financedash-3hcy.onrender.com/">
                Dashboard <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
