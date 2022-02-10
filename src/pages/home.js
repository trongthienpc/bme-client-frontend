import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Services from "../components/post/services";
import About from "../components/post/about";
import Slogan from "../components/post/slogan";
import Roms from "../components/post/roms";
import Tour from "../components/post/tour";
import Comment from "../components/post/comment";
import Rating from "../components/post/rating";
import Restaurant from "../components/post/restaurant";
import Blog from "../components/post/blog";
import Gallery from "../components/post/gallery";

export default class Home extends Component {
  constructor() {
    super();
    AOS.init({ duration: 500 });
  }
  render() {
    return (
      <div>
        <About />

        <Services />

        {/* slogan */}
        <Slogan />
        {/* end slogan */}

        {/* roms */}
        <Roms />
        {/* end roms */}

        {/* video tour */}
        <Tour />
        {/* end video tour */}

        {/* restaurant */}
        <Restaurant />
        {/* end restaurant */}

        {/* comments */}
        <Comment />
        {/* end comments */}

        {/* rating */}
        <Rating />
        {/* end rating */}

        {/* Blog */}
        <Blog />

        {/* end Blog */}

        {/* gallery */}
        <Gallery />
        {/* end gallery */}
      </div>
    );
  }
}
