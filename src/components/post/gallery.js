import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getGaleries } from "../../middleware/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Gallery = () => {
  let galeries = getGaleries();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <section className="ftco-gallery">
        <div className="container-fluid">
          <div className="row g-3">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              //deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {galeries.map((img, index) => (
                <div
                  className="col-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  key={index}
                  style={{ margin: "0 0.5rem" }}
                >
                  <NavLink
                    to=""
                    className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                    style={{
                      backgroundImage: `url(${img.url})`,
                    }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </NavLink>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
