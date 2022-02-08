import "./App.css";
import Home from "./pages/home";
import Nav from "./components/layout/navbarMenu";
import MainSlide from "./components/layout/mainSlide";
import Footer from "./components/layout/footer";
import Booking from "./components/layout/booking";
import ScrollButton from "./ScrollButton";

function App() {
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

export default App;
