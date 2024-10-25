// components/DogInfo.js
"use client"
import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";

const DogInfo = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handleToggleNumber = () => {
    setShowNumber(prevShowNumber => !prevShowNumber);
  };

  return (
    <div className="container mx-auto p-4 mt-10 px-6">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">German Shepherd</h1>
        <div className="flex space-x-1 my-2">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="">★</span>
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-red-500">Quick Contact</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>25 Years of Experience</li>
          <li>All India Home Delivery</li>
          <li>All Breed Dogs Available</li>
          <li>100% Pure Breed</li>
          <li>With KCI Paper</li>
          <li>Life Long Breed Guarantee</li>
          <li>Call/Whatsapp for More Details:</li>
        </ul>
        <button 
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded flex items-center gap-2 cursor-pointer hover:bg-red-400 hover:font-bold"
          onClick={handleToggleNumber}
        >
          <IoCall />
          Call Now
        </button>
        {showNumber && (
          <div className="mt-2 text-lg text-red-500 font-semibold">
            +91 98100 05622
          </div>
        )}
      </div>
    </div>
  );
};

export default DogInfo;
