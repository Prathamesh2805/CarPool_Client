import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import BookRide from "../components/BookRide";
import OfferRide from "../components/OfferRide";
import MyFooter from "../components/MyFooter"

const SignupPage = () => {
    return(
    <div>
        <NavBar />
        <HeroSection />
        <BookRide />
        <OfferRide />
        <MyFooter />
    </div> 
    );
};

export default SignupPage;