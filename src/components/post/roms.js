import React from "react";
import { NavLink } from "react-router-dom";
import { getRooms } from "../../middleware/data";

const Roms = () => {
  let rooms = getRooms();
  return (
    <div id="rooms">
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Our Rooms</span>
              <h2 className="mb-4">Featured Rooms</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {rooms.map((room) => (
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch"
                data-aos="flip-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                key={room.id}
              >
                <div className="room-wrap d-md-flex flex-md-column-reverse">
                  <NavLink
                    to="#"
                    className="img img-room"
                    style={{ backgroundImage: `url(${room.image})` }}
                  ></NavLink>
                  <div className="text p-5 text-center">
                    <h3>
                      <NavLink to="room-single.html">{room.name}</NavLink>
                    </h3>
                    <p>{room.description}</p>
                    <p className="mb-0 mt-2">
                      <span className="me-3 price">
                        ${room.price} <small>/ night</small>
                      </span>
                      <NavLink to="#" className="btn-custom">
                        Book Now
                      </NavLink>
                    </p>
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

export default Roms;
