// components/VerticalSlideshow.js
"use client"

import { useState } from 'react';
import Image from 'next/image';



const images = [
  '/img/img5.jpg',
  '/img/img6.jpg',
  '/img/img5.jpg',
  '/img/img6.jpg'
];

const VerticalSlideshow = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className=" flex">
      <div className="py-10 m-5 flex flex-col space-y-2 w-[20%]">

        {images.map((image, index) => (
          
          <div key={index} className="border p-1 cursor-pointer" onClick={() => setSelectedImage(image)}>
            <Image src={image} alt={`Thumbnail ${index + 1}`} width={100} height={100} layout="responsive" objectFit="cover" className="hover:border-blue-500"/>
          </div>
        ))}
        <div>
       

        </div>
      </div>
      <div className=" m-8 p-4">
        <div className="overflow-hidden cursor-pointer">
          <Image src={selectedImage} alt="Selected Image" width={500} height={700} layout="responsive" objectFit="cover" className=" m-auto transition-transform duration-500 ease-in-out transform hover:scale-150"/>
        </div>
        
      
      </div>
    </div>
  );
};

export default VerticalSlideshow;
