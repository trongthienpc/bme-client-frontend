import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-scroll'
const Nav = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  return (
    <div>
      <nav className={scroll ? "navbar navbar-expand-lg  ftco-navbar-light shrink" : "navbar navbar-expand-lg  ftco-navbar-light"} id="nav">
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
                <Link
                  to="#"
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  activeClass="active"
                  spy={true} smooth={true} duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="rooms"
                  spy={true} smooth={true} duration={500}
                >
                  Rooms
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="restaurant"
                  spy={true} smooth={true} duration={500}
                >
                  Resto &amp; Bar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="blog"
                  spy={true} smooth={true} duration={500}
                >
                  Blog
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="gallery"
                  spy={true} smooth={true} duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
