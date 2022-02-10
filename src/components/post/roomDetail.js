import React, { useState } from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Carousel, CarouselItem } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../scss/modal.scss'
import "./roomDetail.css"
import { getRoomDetail, getServices } from '../../middleware/data';
const RoomDetail = ({ roomId }) => {

    const roomInfo = getRoomDetail(roomId)
    let services = getServices()
    let images = roomInfo.images
    console.log(roomInfo);
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 1,
    //         slidesToSlide: 1, // optional, default to 1.
    //     },

    // };

    // const [index, setIndex] = useState(2)
    // const handleIndex = (selectIndex, e) => {
    //     setIndex(selectIndex)
    // }
    return (
        <div id="roomDetail">
            <section className="ftco-section ftco-room-section">
                <div className="container">
                    <div className="row">

                        <Carousel>

                            {images.map((img, i) => (
                                <CarouselItem key={i}>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt={`${i} slide`}
                                        key={i}
                                    />

                                </CarouselItem>
                            ))}


                        </Carousel>

                        <div className='room-detail-content'>
                            <h2>{roomInfo.name}</h2>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                            <div className="d-md-flex mt-5 mb-5">
                                <ul className="list">
                                    <li><span>Max:</span> {roomInfo.max} Persons</li>
                                    <li><span>Size:</span> {roomInfo.size} m2</li>
                                </ul>
                                <ul className="list ms-md-5">
                                    <li><span>View:</span> {roomInfo.view}</li>
                                    <li><span>Bed:</span> {roomInfo.bed}</li>
                                </ul>
                            </div>
                            <div className="sidebar-box">
                                <h3>Hotel Services</h3>
                                <div className="room-detail-services">

                                    {services.map((s, index) => (
                                        <p key={index} style={{ padding: "10px 0.5rem" }}>
                                            <span style={{ backgroundColor: "#c5a880", color: "#fff", padding: "0.5rem" }}>
                                                {s.name}
                                            </span>
                                        </p>
                                    ))}



                                </div>
                            </div>

                        </div>

                        {/* <div className="col-lg blog-single">
                            <Carousel
                                swipeable={true}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={false}
                                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                //deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-10-px"
                            >
                                {images.map((photo, index) => (
                                    <div key={index}>
                                        <img

                                            src={photo} alt="room detail"
                                        />
                                    </div>



                                ))}

                            </Carousel>
                            <div className='room-detail-content'>
                                <h2>{roomInfo.name}</h2>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                <div className="d-md-flex mt-5 mb-5">
                                    <ul className="list">
                                        <li><span>Max:</span> {roomInfo.max} Persons</li>
                                        <li><span>Size:</span> {roomInfo.size} m2</li>
                                    </ul>
                                    <ul className="list ms-md-5">
                                        <li><span>View:</span> {roomInfo.view}</li>
                                        <li><span>Bed:</span> {roomInfo.bed}</li>
                                    </ul>
                                </div>
                                <div className="sidebar-box">
                                    <h3>Hotel Services</h3>
                                    <div className="room-detail-services">

                                        {services.map((s, index) => (
                                            <p key={index} style={{ padding: "10px 0.5rem" }}>
                                                <span style={{ backgroundColor: "#c5a880", color: "#fff", padding: "0.5rem" }}>
                                                    {s.name}
                                                </span>
                                            </p>
                                        ))}



                                    </div>
                                </div>

                            </div>

                        </div> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoomDetail