import React from 'react';
import Small_Slider from './Small_Slider';
import { FaEye } from "react-icons/fa";
import Link from 'next/link';

// Update DogArray to include unique paths
const DogArray = [
  { img: "/img/Smallbreed/poodle.jpg", Name: "Poodle", path: "/smalldog/Poodle" },
  { img: "/img/Smallbreed/beagle.jpg", Name: "Beagle", path: "/smalldog/Beagle" },
  { img: "/img/Smallbreed/AmericanCocker.jpg", Name: "American Cocker", path: "/smalldog/AmericanCocker" },
  { img: "/img/Smallbreed/FrenchBulldog.jpg", Name: "French Bulldog", path: "/smalldog/FrenchBulldog" },
];

const smallDog = () => {
  return (
    <div className='mt-16'>
      <h3 className='pt-12 px-[170px] py-2 font-bold text-5xl'>Small Dog Breed</h3>
      <Small_Slider />
      <div className="m-auto container flex w-[80vw] justify-evenly items-center flex-wrap mt-4">
        {DogArray.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <div className="relative group flex flex-col justify-center items-center dog-card w-[23vw] py-6 border-4 border-blue-500 mb-5 gap-3 cursor-pointer">
                <img src={item.img} alt={item.Name} className="w-full h-auto p-4" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className='bg-cyan-700 p-3'>
                    <Link href={item.path}>
                      <FaEye className=' text-white text-4xl m-auto' />
                    </Link>
                  </div>
                </div>
                <div className="name m-auto text-2xl">{item.Name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default smallDog;
