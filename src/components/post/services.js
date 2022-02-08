import React from 'react';
import { NavLink } from 'react-router-dom'
import { getServices } from '../../middleware/data';
const Services = () => {
    let services = getServices()
    return (
        <div>
            {/* services */}
            <section className="ftco-section">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
                            <span className="subheading">Unwind Services</span>
                            <h2 className="mb-4">Explore Our Hotel Services</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        {services.map((service, index) => (
                            <div key={index} className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <NavLink to="#" className="services">
                                    <div className="icon"><span className={service.icon}></span></div>
                                    <div className="text">
                                        <h2>{service.name}</h2>
                                    </div>
                                </NavLink>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* end services */}
        </div>
    )
};

export default Services;
