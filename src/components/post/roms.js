import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getRooms } from "../../middleware/data";
import RoomModal from "../modal/roomModal";
const Roms = () => {
  let rooms = getRooms();
  const [lgShow, setLgShow] = useState(false);
  const [roomName, setRoomName] = useState("No choose")
  const [roomId, setRoomId] = useState()
  const handleBook = (text, id) => {
    console.log("name: ", text);
    setLgShow(true)
    setRoomName(text);
    setRoomId(id)
  }
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
                      <NavLink to="#" onClick={() => handleBook(room.name, room.id)}>{room.name}</NavLink>
                    </h3>
                    <p>{room.description}</p>
                    <p className="mb-0 mt-2">
                      <span className="me-3 price">
                        ${room.price} <small>/ night</small>
                      </span>
                      <button to="#" className="btn btn-primary">
                        Book Now
                      </button>
                    </p>

                  </div>
                </div>

              </div>

            ))}
            <RoomModal lgShow={lgShow} setLgShow={setLgShow} roomName={roomName} roomId={roomId} />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Roms;
