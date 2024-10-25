"use client"
import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const images = [
  '/img/DogWalker/img1.jpg',
  '/img/DogWalker/img2.jpg',
  '/img/DogWalker/img3.jpg',
  '/img/DogWalker/img4.jpg'
];

const ImageSlider2 = () => {
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
    <div className="relative w-full max-w-4xl mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <GrFormPrevious className='w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9' />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <MdNavigateNext className='w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9' />
      </button>
    </div>
  );
};

export default ImageSlider2;
