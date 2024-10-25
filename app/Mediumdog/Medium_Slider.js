"use client"
import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const images = [
  '/img/Mediumbreed/beagle.jpg',
  '/img/Mediumbreed/americanCocker.jpg',
  '/img/Mediumbreed/ChowChow.jpg',
  '/img/Mediumbreed/Dachshund.jpg'
];

const Medium_Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[90vw] h-[50vw] sm:w-[80vw] sm:h-[40vw] md:w-[70vw] md:h-[35vw] lg:w-[90vw] lg:h-[35vw] lg:mb-5 overflow-hidden mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            objectFit: 'cover' 
          }}
        />
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <GrFormPrevious className='md:w-9 md:h-9' />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <MdNavigateNext className='md:w-9 md:h-9' />
      </button>
    </div>
  );
};

export default Medium_Slider;
