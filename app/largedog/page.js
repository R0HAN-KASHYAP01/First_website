import React from 'react';
import ImageSlider3 from './ImageSlider3';
import { FaEye } from "react-icons/fa";
import Link from 'next/link';

// Update DogArray to include unique paths
const DogArray = [
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img1.jpg", Name: "breed1", path: "/largedog/breed1" },
  { img: "./img/img2.jpg", Name: "breed2", path: "/largedog/breed2" }
];

const LargeDog = () => {
  return (
    <div className='mt-16'>
      <h3 className='pt-12 px-[170px] py-2 font-bold text-2xl'>Large Dog Breed</h3>
      <ImageSlider3 />
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

export default LargeDog;
