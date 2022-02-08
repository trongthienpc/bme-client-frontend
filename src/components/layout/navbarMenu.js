import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ftco-navbar-light">
        <div className="container-xl">
          <NavLink
            className="navbar-brand align-items-center"
            to="index-2.html"
          >
            <span className="">
              BinhMinh <small>EcoLodge Booking</small>
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="index-2.html">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  to="#about"
                  className="nav-link"
                  activeClassName="active"
                  activeStyle={{ color: "red" }}
                >
                  About
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  to="#rooms"
                  className="nav-link"
                  activeClassName="active"
                  activeStyle={{ color: "red" }}
                >
                  Rooms
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  className="nav-link"
                  activeClassName="active"
                  activeStyle={{ color: "red" }}
                  to="#restaurant"
                >
                  Resto &amp; Bar
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  className="nav-link"
                  activeClassName="active"
                  activeStyle={{ color: "red" }}
                  to="#blog"
                >
                  Blog
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  className="nav-link"
                  activeClassName="active"
                  activeStyle={{ color: "red" }}
                  to="#footer"
                >
                  Contact
                </NavHashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
