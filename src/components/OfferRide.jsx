/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import { addRide } from "../services/api.js";

const defaultValue = {
  currentlocation: "",
  destination: "",
  numberofpeople: "",
  vehiclenumber: "",
  modelname: "",
  vehicleimage: "",
};

const OfferRide = () => {
  const [ride, setRide] = useState(defaultValue);

  // const navigate = useNavigate()

  const onValueChange = (e) => {
    setRide({ ...ride, [e.target.name]: e.target.value });
  };

  const addRideDetails = async () => {
    await addRide(ride);
    // alert("Ride added Successfully");
  };

  return (
    <section className="bg-white dark:bg-gray-900 w-2/4 mx-auto mt-4">
      <h2 class="font-bold text-3xl mb-10 text-center">Offer Rides!!</h2>
      <form class="mb-10">
        <div className="mb-6">
          <label
            htmlFor="currentlocation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Current Location
          </label>
          <input
            onChange={(e) => onValueChange(e)}
            name="currentlocation"
            type="text"
            id="currentlocation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="From.."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="destination"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Destination
          </label>
          <input
            onChange={(e) => onValueChange(e)}
            name="destination"
            type="text"
            id="destination"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="To.."
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="numberofpeople"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of People
          </label>
          <select
            onChange={(e) => onValueChange(e)}
            name="numberofpeople"
            id="numberofpeople"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="1">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <h3 className="font-semibold text-center text-xl mb-4">
          Vehicle Details
        </h3>
        <div className="mb-6">
          <label
            htmlFor="vehiclenumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Vehicle Number
          </label>
          <input
            onChange={(e) => onValueChange(e)}
            name="vehiclenumber"
            type="text"
            id="vehiclenumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="MH14KZ6199"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="modelname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Model Name
          </label>
          <input
            onChange={(e) => onValueChange(e)}
            name="modelname"
            type="text"
            id="modelname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tata Nexon"
            required
          />
        </div>

        {/* <>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="vehicleimage"
          >
            Upload Vehicle Image
          </label>
          <input
            className="mb-6 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="vehicleimage"
            name="vehicleimage"
            type="file"
          />
        </> */}

        <button
          type="submit"
          onClick={() => addRideDetails()}
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post Ride
        </button>
      </form>
    </section>
  );
};

export default OfferRide;
