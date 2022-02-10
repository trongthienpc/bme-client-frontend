import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div id="about">
        {/* about */}
        <section className="ftco-section ftco-about-section">
          <div className="container-xl">
            <div className="row g-xl-5">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="f-services d-md-flex flex-md-column-reverse">
                      <div
                        className="img w-100"
                        style={{
                          backgroundImage:
                            "url(../assets/images/f-services.jpg)",
                        }}
                      ></div>
                      <div className="text w-100 p-4 text-center mb-md-4">
                        <div className="icon">
                          <span className="flaticon-pillow"></span>
                        </div>
                        <h3>Standard Room</h3>
                        <p>
                          This is the standard room. It is equipped with the essentials for your family
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="f-services">
                      <div
                        className="img w-100 mb-md-4"
                        style={{
                          backgroundImage:
                            "url(../assets/images/f-services-2.jpg)",
                        }}
                      ></div>
                      <div className="text w-100 p-4 text-center">
                        <div className="icon">
                          <span className="flaticon-special"></span>
                        </div>
                        <h3>Special Offers</h3>
                        <p>
                          This is the room type for customers with extra requirements for special events
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 heading-section d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="mt-5 mt-md-0">
                  <span className="subheading">About Us</span>
                  <h2 className="mb-4">Binh Minh Eco Lodge</h2>
                  <p >
                    Located in Can Tho, 16.1 km from Vincom Plaza Xuan Khanh, Binh Minh Eco Lodge features a bar, a garden and barbecue facilities. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property.
                  </p>
                  <p> The hotel has family rooms.

                    At the hotel every room includes air conditioning, a desk, a balcony with a garden view, a private bathroom, a flat-screen TV, bed linen and towels. All guest rooms will provide guests with a closet and an electric tea pot. </p>

                  <p>  A à la carte breakfast is available every morning at Binh Minh Eco Lodge.

                    The accommodation has a terrace. Guests at Binh Minh Eco Lodge will be able to enjoy activities in and around Can Tho, like cycling. </p>

                  <p>Lotte Mart Can Tho is 16.1 km from the hotel, while Vincom Plaza Hung Vuong is 17.7 km away. The nearest airport is Can Tho International, 24.1 km from Binh Minh Eco Lodge, and the property offers a paid airport shuttle service.
                  </p>
                  <p>
                    <a
                      href="https://www.booking.com/hotel/vn/binh-minh-eco-lodge-can-tho.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaPQBiAEBmAExuAEHyAEM2AEB6AEB-AECiAIBqAIDuAL9xIiQBsACAdICJDIzOTg5MTYxLTNmNzUtNDE3YS1hNDJlLTRlMGZmOWExYWI1YtgCBeACAQ;sid=bedbe52d2809ab3f35b72f64d44fda1f;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1644307097;srpvid=77b4380bbe840159;type=total;ucfs=1&#hotelTmpl"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary py-3 px-4"
                    >
                      Book Now
                    </a>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about */}
      </div>
    );
  }
}
