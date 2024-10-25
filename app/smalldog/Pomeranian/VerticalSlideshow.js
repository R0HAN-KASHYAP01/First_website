"use client"
import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/img/Smallbreed/Pomeranian/img1.jpg',
  '/img/Smallbreed/Pomeranian/img2.jpg',
  '/img/Smallbreed/Pomeranian/img3.jpg',
  '/img/Smallbreed/Pomeranian/img1.jpg'
];

const VerticalSlideshow = () => {
  const [selectedMedia, setSelectedMedia] = useState(images[0]);

  return (
    <div className="flex flex-row md:flex-row">
      {/* Slider */}
      <div className="flex flex-col justify-center items-center  md:flex-col md:w-[20%] w-[30vw]  overflow-x-auto md:overflow-y-auto pt-4 mx-4 mt-3 space-x-2 md:space-x-0 md:space-y-2">
        {images.map((media, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer border-cyan-600 border-4 my-2  flex-shrink-0 md:flex-shrink-0"
            onClick={() => setSelectedMedia(media)}
          >
            {media.endsWith('.mp4') ? (
              <video width={80} height={80} className="hover:border-blue-500" muted>
                <source src={media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={media}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                layout="fixed"
                objectFit="cover"
                className="hover:border-blue-500"
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Image/Video */}
      <div className="m-7 p-4 w-full md:w-[80%]">
        <div className="overflow-hidden cursor-pointer">
          {selectedMedia.endsWith('.mp4') ? (
            <video
              width="100%"
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
              width={600}
              height={900}
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

