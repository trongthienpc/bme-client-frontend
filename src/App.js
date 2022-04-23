import React from "react";
import { render } from "react-dom";
import { Events } from "react-scroll";

import "./App.css";
import Home from "./pages/home";
import Nav from "./components/layout/navbarMenu";
import MainSlide from "./components/layout/mainSlide";
import Footer from "./components/layout/footer";
import Booking from "./components/layout/booking";
import ScrollButton from "./ScrollButton";
import { getRooms } from "./middleware/api";
import { urlApi } from "./middleware/constants";

// function App() {
//   return (
//     <div>
//       <Nav />
//       <MainSlide />
//       <Booking />
//       <Home />
//       <Footer />
//       <ScrollButton />
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    const getallRoom = async () => {
      const res = getRooms();

      console.log(res);
    };
    getallRoom();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div>
        <Nav />
        <MainSlide />
        <Booking />
        <Home />
        <Footer />
        <ScrollButton />
      </div>
    );
  }
}

export default App;
