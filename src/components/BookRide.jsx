/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";



const BookRide = () => {

  return (
    <section className="bg-white dark:bg-gray-900 w-2/4 mx-auto mt-4">
      <h2 class="font-bold text-3xl mb-10 text-center">Search Rides!!</h2>
      <form class="mb-10">
        <div className="mb-6">
          <label
            htmlFor="currentlocation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Current Location
          </label>
          <input
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
            type="text"
            id="destination"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="To.."
            required
          />
        </div>

        <div class="mb-6" >
          
            <label
              htmlFor="numberofpeople"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of People
            </label>
            <select
              id="numberofpeople"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            >
              
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search Rides
        </button>
      </form>
    </section>
  );
};

export default BookRide;
