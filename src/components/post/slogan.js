import React, { Component } from 'react';
export default class Slogan extends Component {
    render() {
        return <div>
            {/* slogan */}
            <section className="ftco-intro ftco-no-pt ftco-no-pb img" style={{ backgroundImage: "url(../assets/images/bg_1.jpg)" }}>
                <div className="overlay"></div>
                <div className="container-xl py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                                <div className="col-md-8 d-flex align-items-center">
                                    <div>
                                        <span className="subheading">Find Best Hotel For Leaving</span>
                                        <h1 className="mb-md-0 mb-4">Find the Best Hotel in Your Next Vacation</h1>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <p className="mb-0">

                                        <a
                                            href="https://www.booking.com/hotel/vn/binh-minh-eco-lodge-can-tho.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaPQBiAEBmAExuAEHyAEM2AEB6AEB-AECiAIBqAIDuAL9xIiQBsACAdICJDIzOTg5MTYxLTNmNzUtNDE3YS1hNDJlLTRlMGZmOWExYWI1YtgCBeACAQ;sid=bedbe52d2809ab3f35b72f64d44fda1f;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1644307097;srpvid=77b4380bbe840159;type=total;ucfs=1&#hotelTmpl"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-primary py-md-4 py-3 px-md-5 px-4"
                                        >
                                            Book Now
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end slogan */}
        </div>;
    }
}
