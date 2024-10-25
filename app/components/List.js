import React, { useState, useEffect } from 'react';
import { FaEye } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Link from 'next/link';

const DogArray = [
  { img: "/img/largebreed/Labrador.jpg", Name: "Labrador", path: "/largedog/Labrador" },
  { img: "/img/largebreed/Husky.jpg", Name: "Husky", path: "/largedog/Husky" },
  { img: "/img/largebreed/GermanShepherd.jpg", Name: "German Shepherd", path: "/largedog/GermanShepherd" },
  { img: "/img/Smallbreed/poodle.jpg", Name: "Poodle", path: "/smalldog/Poodle" },
  { img: "/img/Mediumbreed/beagle.jpg", Name: "Beagle", path: "/Mediumdog/Beagle" },
  { img: "/img/Mediumbreed/americanCocker.jpg", Name: "American Cocker", path: "/Mediumdog/AmericanCocker" },
  { img: "/img/Smallbreed/FrenchBulldog.jpg", Name: "French Bulldog", path: "/smalldog/FrenchBulldog" },
];

const DogList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Set initial value based on current window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DogArray.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DogArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + DogArray.length) % DogArray.length);
  };

  const visibleDogs = DogArray.slice(currentIndex, currentIndex + itemsPerPage);
  const extraDogs = visibleDogs.length < itemsPerPage ? DogArray.slice(0, itemsPerPage - visibleDogs.length) : [];

  return (
    <div className=''>
      <div className='mt-4 text-center text-4xl font-bold mb-4 md:text-5xl'>Currently Available</div>
      <div className="m-auto container flex flex-col md:flex-row md:flex-wrap justify-center items-center w-[90vw] md:w-[80vw] lg:w-[70vw] mt-5 gap-5 relative">
        <div className="absolute top-[-30px] right-[10px] flex gap-1 p-2 z-10 md:text-2xl md:p-2 md:top-[-40px]">
          <button onClick={prevSlide} className="p-1 bg-slate-400 text-white rounded-md"><GrFormPrevious /></button>
          <button onClick={nextSlide} className="p-1 bg-slate-400 text-white rounded-md"><MdNavigateNext /></button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {visibleDogs.concat(extraDogs).map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <div className="relative group flex flex-col justify-center items-center dog-card w-[90vw] sm:w-[90vw] md:w-[30vw] lg:w-[23vw] h-[300px] py-6 border-4 border-blue-500 mb-5 gap-3 cursor-pointer">
                  <img src={item.img} alt={item.Name} className="w-full h-auto p-4" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className='bg-cyan-700 p-3'>
                      <Link href={item.path}>
                        <FaEye className=' text-white text-4xl m-auto' />
                      </Link>
                    </div>
                  </div>
                  <div className="name m-auto text-2xl text-center">{item.Name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DogList;
