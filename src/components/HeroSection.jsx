/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeroImg from "../assets/8489144.png";
import BookRideImg from "../assets/5030025.png";
import OfferRideImg from "../assets/6365344.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    
    <section className="bg-white dark:bg-gray-900 mx-10">

      {/* HEROSECTION STARTS HERE */}
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Ride. Share. Save.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et maxime
            saepe eligendi, quia nam ipsam eius quod accusamus explicabo
            recusandae dolorem voluptates provident voluptatum ab nulla porro
            corrupti cupiditate error.
          </p>
          <Link to="/about">
            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-gray-300 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Explore
            </button>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={HeroImg} alt="HeroBg" />
        </div>
      </div>
      {/* HeroSection Ends Here */}



      {/* BookRideSection Starts Here */}
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={BookRideImg} alt="BookRideBg" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Ride Safely.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et maxime
            saepe eligendi, quia nam ipsam eius quod accusamus explicabo
            recusandae dolorem voluptates provident voluptatum ab nulla porro
            corrupti cupiditate error.
          </p>
          <button
            href="#"
            className="inline-flex items-center justify-center ml-5 px-5 py-3 text-base font-medium text-center bg-gray-300 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Book Ride
          </button>
        </div>
      </div>
      {/* BookRideSection Ends Here */}



      {/* OfferRideSection Starts Here */}
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Driving Alone?
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et maxime
            saepe eligendi, quia nam ipsam eius quod accusamus explicabo
            recusandae dolorem voluptates provident voluptatum ab nulla porro
            corrupti cupiditate error.
          </p>
          <button
            href="#"
            className="inline-flex items-center justify-center ml-5 px-5 py-3 text-base font-medium text-center bg-gray-300 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Offer Ride
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={OfferRideImg} alt="OfferRideBg" />
        </div>
      </div>
      {/* OfferRideSection Ends Here */}

    </section>
  );
};

export default HeroSection;
