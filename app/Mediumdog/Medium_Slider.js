"use client"
import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const images = [
  '/img/Mediumbreed/Labrador.jpg',
  '/img/Mediumbreed/Husky.jpg',
  '/img/Mediumbreed/GermanShepherd.jpg'
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
    <div className="relative w-[80vw] h-[40vw] overflow-hidden mx-auto">
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
        <GrFormPrevious className='w-9 h-9' />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <MdNavigateNext className='w-9 h-9' />
      </button>
    </div>
  );
};

export default Medium_Slider;
