import React, { Component } from "react";
export default class Booking extends Component {
  render() {
    return (
      <div>
        {/* booking form   */}
        <section className="ftco-section ftco-no-pb ftco-no-pt ftco-booking">
          <div className="container">
            <div className="row">
              <div className="col-md-12 booking-form">
                <div className="row g-0">
                  <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                    <div
                      className="form-group ps-4 border-0"
                      style={{ textAlign: "center" }}
                    >
                      <label style={{ fontSize: 26 }}>
                        <span
                          className="fa fa-phone"
                          style={{ color: "#fff" }}
                        ></span>{" "}
                        Hotline: +84 939 729 996
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                    <div
                      className="form-group ps-4 border-0"
                      style={{ textAlign: "center" }}
                    >
                      <label style={{ fontSize: 26 }}>
                        <a
                          href="https://www.booking.com/hotel/vn/binh-minh-eco-lodge-can-tho.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaPQBiAEBmAExuAEHyAEM2AEB6AEB-AECiAIBqAIDuAL9xIiQBsACAdICJDIzOTg5MTYxLTNmNzUtNDE3YS1hNDJlLTRlMGZmOWExYWI1YtgCBeACAQ;sid=bedbe52d2809ab3f35b72f64d44fda1f;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1644307097;srpvid=77b4380bbe840159;type=total;ucfs=1&#hotelTmpl"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary py-3 px-4"
                        >
                          Book Now
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                {/* <form action="#" className="booking-form">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                        <div className="form-group ps-4 border-0">
                                            <label >Check-In</label>
                                            <div className="form-field">
                                                <div className="icon"><span className="fa fa-calendar"></span></div>
                                                <input type="text" className="form-control arrival_date" placeholder="Check-In Date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                        <div className="form-group ps-4">
                                            <label >Check-Out</label>
                                            <div className="form-field">
                                                <div className="icon"><span className="fa fa-calendar"></span></div>
                                                <input type="text" className="form-control departure_date" placeholder="Check-Out Date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                        <div className="form-group ps-4">
                                            <label >Rooms</label>
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                    <select name="" id="" className="form-control">
                                                        <option value="">Suite</option>
                                                        <option value="">Family Room</option>
                                                        <option value="">classNameic Room</option>
                                                        <option value="">Superior Room</option>
                                                        <option value="">Luxury Room</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                        <div className="form-group ps-4">
                                            <label >Guests</label>
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                    <select name="" id="" className="form-control">
                                                        <option value="">1 Person</option>
                                                        <option value="">2 Person</option>
                                                        <option value="">3 Person</option>
                                                        <option value="">4 Person</option>
                                                        <option value="">5 Person</option>
                                                        <option value="">6-9 Person</option>
                                                        <option value="">10+ Person</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg d-flex">
                                        <div className="form-group d-flex border-0">
                                            <div className="form-field w-100 align-items-center d-flex">
                                                <NavLink to="#" type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-primary py-lg-4 py-xl-0"><span>Check Availability</span></NavLink>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
              </div>
            </div>
          </div>
        </section>
        {/* end booking form */}
      </div>
    );
  }
}
