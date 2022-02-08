import React, { Component } from 'react';

export default class Rating extends Component {
    render() {
        return <div>
            <section className="ftco-section-counter">
                <div className="container">
                    <div className="row section-counter">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="counter-wrap">
                                <span className="number"><span className="countup">38900</span></span>
                                <span className="caption"># of Happy Guests</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="counter-wrap">
                                <span className="number"><span className="countup">320</span></span>
                                <span className="caption"># of Rooms</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="counter-wrap">
                                <span className="number"><span className="countup">1000</span></span>
                                <span className="caption"># of Staffs</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="counter-wrap">
                                <span className="number"><span className="countup">587</span></span>
                                <span className="caption"># of Destination</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </section>
        </div>;
    }
}
