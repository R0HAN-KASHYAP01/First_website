"use client"

import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/img/Smallbreed/poodle/img1.jpg',
  '/img/Smallbreed/poodle/img2.jpg',
  '/img/Smallbreed/poodle/img3.jpg',
  '/img/Smallbreed/AmericanCocker/video1.mp4'
];

const VerticalSlideshow = () => {
  const [selectedMedia, setSelectedMedia] = useState(images[0]);

  return (
    <div className="flex">
      <div className="py-10 m-5 flex flex-col space-y-2 w-[20%]">
        {images.map((media, index) => (
          <div
            key={index}
            className="p-3 cursor-pointer border-cyan-600 border-4"
            onClick={() => setSelectedMedia(media)}
          >
            {media.endsWith('.mp4') ? (
              <video width={100} height={100} className="hover:border-blue-500" muted>
                <source src={media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={media}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                className="hover:border-blue-500"
              />
            )}
          </div>
        ))}
      </div>
      <div className="m-8 p-4 w-[80%]">
        <div className="overflow-hidden cursor-pointer">
          {selectedMedia.endsWith('.mp4') ? (
            <video
              width="80%"
              height="auto"
              controls
              className="m-auto transition-transform duration-500 ease-in-out transform max-h-[80vh]"
            >
              <source src={selectedMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={selectedMedia}
              alt="Selected Media"
              width={500}
              height={700}
              layout="responsive"
              objectFit="cover"
              className="m-auto transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalSlideshow;
