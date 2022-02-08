import React, { Component } from "react";
import { getRestaurants } from "../../middleware/data";

const Restaurant = () => {
  let restaurants = getRestaurants();

  return (
    <div>
      <section className="ftco-section" id="restaurant">
        <div className="container-fluid">
          <div className="row justify-content-center pb-4">
            <div
              className="col-md-7 text-center heading-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Resto &amp; Bar</span>
              <h2 className="mb-3">Restaurant &amp; Bar</h2>
            </div>
          </div>
          <div className="row g-md-5">
            <div className="col-md-12 col-xl-5 d-flex align-items-stretch">
              <div
                className="img w-100 img-cuisine"
                style={{
                  backgroundImage: "url(../assets/images/gallery_17/gallery_14.jpg)",
                }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-cooking"></span>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7 ps-xl-5">
              <div className="row g-md-2">
                <div
                  className="col-md-6"
                  style={{
                    display: "flex",
                    height: "600px",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  {restaurants.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="pricing-entry d-flex align-items-center"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${restaurant.image})` }}
                      ></div>
                      <div className="desc ps-3">
                        <div className="d-flex text">
                          <h3>
                            <span>{restaurant.name}</span>
                          </h3>
                          <span className="price">${restaurant.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Restaurant;
