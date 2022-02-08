import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
;


export default class MainSlide extends Component {
    render() {
        return <div>
            <section className="hero-wrap" style={{ backgroundImage: "url(../assets/images/gallery_17/gallery_26.jpg)" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-lg-10 text-center">
                            <span className="subheading">Enjoy Your Wonderful Holidays With A Great Ecolodge Experience!</span>
                            <h1 className="mb-4">Most Relaxing Place</h1>
                            <p>
                                <NavLink to="#" className="btn btn-primary p-4 py-3">Take A Tour <span className="ion-ios-arrow-round-forward"></span></NavLink>
                                <NavLink to="#" className="btn btn-white btn-outline-white p-4 py-3">Enjoy More <span className="ion-ios-arrow-round-forward"></span></NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}
