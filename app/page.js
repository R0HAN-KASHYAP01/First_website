"use client"
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path to your actual component location
import ImageSlider from './components/ImageSlider';// Adjust the path to your actual component location
import DogList from './components/List';
import TextSlider2 from './components/Text_slider2';

const Page = () => {
  return (
    <div className=''>
      <Navbar />
      <TextSlider2 />
      <div className='mt-2'> {/* Adjust mt-16 based on your navbar height */}
        <ImageSlider />
      </div>
      <DogList />
    </div>
  );
};

export default Page;
