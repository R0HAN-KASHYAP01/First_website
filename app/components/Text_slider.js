// components/TextSlider.js
import React from 'react';

const TextSlider = () => {
  return (
    <div className="bg-blue-500 mt-1 md:mt-[72px] overflow-hidden whitespace-nowrap">
      <p className="inline-block animate-loop-scroll text-white p-2 text-xl sm:text-2xl">
        Services Available: Vet Service, Grooming Home Service, Dog Training, and Dog Walker      </p>
      <p className="inline-block animate-loop-scroll text-white p-2 pl-[30px] text-xl sm:text-2xl" aria-hidden="true">
        Services Available: Vet Service, Grooming Home Service, Dog Training, and Dog Walker      </p>
    </div>
  );
};

export default TextSlider;
