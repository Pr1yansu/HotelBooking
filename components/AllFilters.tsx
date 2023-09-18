"use client";
import React, { useState } from "react";

const AllFilters = () => {
  const [location, setLocation] = useState("all");
  const [time, setTime] = useState("all");
  const [rating, setRating] = useState("all");
  const [plot, setPlot] = useState("all");
  const [price, setPrice] = useState("all");

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(e.target.value);
  };

  const handlePlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlot(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value);
  };

  return (
    <div className="p-10 w-full">
      <div className="w-full">
        {/* Location */}
        <div className="w-full">
          <label htmlFor="location" className="block mb-1 custom-color">
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="border rounded w-full p-2"
          >
            {/* Options for location */}
          </select>
        </div>

        {/* Time */}
        <div className="w-full">
          <label htmlFor="time" className="block mb-1 custom-color">
            Time
          </label>
          <select
            id="time"
            value={time}
            onChange={handleTimeChange}
            className="border rounded w-full p-2"
          >
            {/* Options for time */}
          </select>
        </div>

        {/* Rating */}
        <div className="w-full">
          <label htmlFor="rating" className="block mb-1 custom-color">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            className="border rounded w-full p-2"
          >
            {/* Options for rating */}
          </select>
        </div>

        {/* Plot */}
        <div className="w-full">
          <label htmlFor="plot" className="block mb-1 custom-color">
            Plot
          </label>
          <select
            id="plot"
            value={plot}
            onChange={handlePlotChange}
            className="border rounded w-full p-2"
          >
            {/* Options for plot */}
          </select>
        </div>

        {/* Price Range */}
        <div className="w-full">
          <label htmlFor="price" className="block mb-1 custom-color">
            Price Range
          </label>
          <select
            id="price"
            value={price}
            onChange={handlePriceChange}
            className="border rounded w-full p-2"
          >
            {/* Options for price range */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllFilters;
