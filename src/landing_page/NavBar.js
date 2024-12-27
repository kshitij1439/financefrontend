import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="mb-5">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{backgroundColor:"#FFF"}}>
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          
          <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active mx-3">
              <Link class="nav-link" to="/signup">
                Signup <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mx-3">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item active mx-3">
              <Link class="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item active mx-3">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item active mx-3">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
