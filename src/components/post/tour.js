import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';


const Tour = () => {
    const [isOpen, setOpen] = useState(false)
    return <div>
        <section className="img vid-section" style={{ backgroundImage: "url(../assets/images/gallery_17/gallery_20.jpg)" }}>
            <div className="overlay">

            </div>
            <div className="container-xl">
                <div className="row justify-content-center">
                    <div className="col-md-10 vid-height d-flex align-items-center justify-content-center text-center">
                        <div className="video-wrap" data-aos="fade-up">
                            <span className="subheading">Watch our luxurious hotel</span>
                            <h3>Take A Tour</h3>
                            <button className="video-icon glightbox d-flex align-items-center justify-content-center" onClick={() => setOpen(true)}>
                                <span className="ion-ios-play"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen} videoId="hAb1lcnB1mw" onClose={() => setOpen(false)} />
        </section >
    </div >;

}

export default Tour
