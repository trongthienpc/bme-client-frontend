import React, { } from "react";
import { NavLink } from "react-router-dom";
import { getServices } from "../../middleware/data";

const Footer = () => {
  let services = getServices();
  return (
    <div id="footer">
      {/* footer */}
      <footer className="ftco-footer">
        <div className="container-xl">
          <div className="row mb-5 pb-5 justify-content-between">
            <div className="col-md-6 col-lg">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2 logo d-flex">
                  <NavLink
                    className="navbar-brand align-items-center"
                    to="index-2.html"
                  >
                    <span className="">
                      BinhMinh <small>Ecolodge Booking</small>
                    </span>
                  </NavLink>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <ul className="ftco-footer-social list-unstyled mt-2">
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-twitter"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-facebook"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-instagram"></span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon fa fa-map marker"></span>
                      <span className="text">
                        10 Hai Ba Trung, Tan An, Ninh Kieu, Can Tho, VN
                      </span>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className="icon fa fa-phone"></span>
                        <span className="text">+84 939 729 996</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className="icon fa fa-paper-plane pr-4"></span>
                        <span className="text">
                          <span
                            className="__cf_email__"
                            data-cfemail="9df4f3fbf2dde4f2e8eff9f2f0fcf4f3b3fef2f0"
                          >
                            binhminhecolodge@gmail.com
                          </span>
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
              </div>
              <div className="row">
                <div className="col-lg">
                  <div className="ftco-footer-widget mb-4">
                    <ul
                      className="list-unstyled"
                      style={{
                        height: 170,
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                      }}
                    >
                      {services.map((service, index) => (
                        <li key={index}>
                          <NavLink to="#">
                            <span className="fa fa-chevron-right me-2"></span>
                            {service.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 py-5 bg-darken">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12 text-center">
                <p
                  className="mb-0"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, -.5)",
                    fontSize: 13,
                  }}
                >
                  Thank you{" "}
                  <i
                    className="fa fa-heart color-danger"
                    aria-hidden="true"
                  ></i>
                  to{" "}
                  <NavLink
                    to="https://colorlib.com/"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Colorlib
                  </NavLink>{" "}
                  | Edited by @thientt{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
};

export default Footer;
