import React from 'react';
import ImageSlider3 from './large_slider';
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import TextSlider2 from '../components/Text_slider2';

// Update DogArray to include unique paths
const DogArray = [
  { img: "/img/Largebreed/GoldenRetriever1.jpg", Name: "Golden Retriever", path: "/largedog/GoldenRetriever" },
  { img: "/img/Largebreed/Labrador1.jpg", Name: "Labrador", path: "/largedog/Labrador" },
  { img: "/img/Largebreed/Husky.jpg", Name: "Husky", path: "/largedog/Husky" },
  { img: "/img/Largebreed/GermanShepherd.jpg", Name: "German Shepherd", path: "/largedog/GermanShepherd" },
  { img: "/img/Largebreed/Boxer.jpg", Name: "Boxer", path: "/largedog/Boxer" },
];

const LargeDog = () => {
  return (
    <div className=''>
      <TextSlider2/>
      <h3 className=' pt-8 md:px-[170px] py-2 font-bold text-3xl px-[50px] md:text-5xl'>Large Dog Breed</h3>
      <ImageSlider3 />
      <div className="md:m-auto container w-fit flex flex-col md:flex-row md:w-[80vw] justify-evenly items-center flex-wrap mt-4  m-4">
        {DogArray.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <div className="relative group flex flex-col justify-center items-center dog-card md:w-[23vw] h-[300px] py-6 border-4 border-blue-500 mb-5 gap-3 cursor-pointer">
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
