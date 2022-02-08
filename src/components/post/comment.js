import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getComnents } from "../../middleware/data";
const Comment = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let comments = getComnents();
  return (
    <div>
      <section className="ftco-section testimony-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center pb-4">
            <div
              className="col-md-7 text-center heading-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Guests</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="carousel-testimony">
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
                  {comments.map((com, index) => (
                    <div className="item" key={index}>
                      <div className="testimony-wrap">
                        <div className="text">
                          <div className="d-flex align-items-center mb-4">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${com.avatar})`,
                              }}
                            >
                              <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-quote-left" />
                              </div>
                            </div>
                            <div className="ps-3 tx">
                              <p className="name">{com.name}</p>
                              <span className="position">{com.position}</span>
                            </div>
                          </div>
                          <p className="mb-4 msg">{com.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Comment;
