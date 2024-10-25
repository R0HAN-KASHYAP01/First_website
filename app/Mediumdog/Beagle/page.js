import React from 'react';
import VerticalSlideshow from './VerticalSlideshow';
import DogInfo from './DogInfo';
import DynamicInfo from './DynamicInfo';
import TextSlider2 from '@/app/components/Text_slider2';

const Beagle = () => {
  return (
    <>
      <TextSlider2 />

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <VerticalSlideshow />
        </div>
        <div className="w-full lg:w-2/3">
          <DogInfo />
        </div>
      </div>

      <DynamicInfo />
    </>
  );
};

export default Beagle;
