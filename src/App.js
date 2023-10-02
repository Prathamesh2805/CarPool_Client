import "./App.css";
import "flowbite";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import BookRide from "./components/BookRide";
import OfferRide from "./components/OfferRide";
import Rides from "./components/Rides";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/offerride" element={<OfferRide />} />
        <Route path="/bookride" element={<BookRide />} />
        <Route path="/rides" element={<Rides />} />
      </Routes>
    <MyFooter />
    <ScrollToTop smooth />
    </BrowserRouter>
  );
}

export default App;
