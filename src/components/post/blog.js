import React from "react";
import { NavLink } from "react-router-dom";
import { getBlogs } from "../../middleware/data";
const Blog = () => {
  let blogs = getBlogs();
  return (
    <div id="blog">
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center mb-5">
            <div
              className="col-md-7 heading-section text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Our Blog</span>
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-md-6 col-lg-3 d-flex" key={blog.id}>
                <div
                  className="blog-entry justify-content-end"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <NavLink
                    to="blog-single.html"
                    className="block-20 img d-flex align-items-end"
                    style={{
                      backgroundImage: `url(${blog.image})`,
                    }}
                  ></NavLink>
                  <div className="text">
                    <p className="meta">
                      <span>{blog.author}</span> <span>{blog.createdAt}</span>
                    </p>
                    <h3 className="heading mb-3">
                      <NavLink to="#">{blog.name}</NavLink>
                    </h3>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
