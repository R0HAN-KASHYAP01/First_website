"use client"
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path to your actual component location
import ImageSlider from './components/ImageSlider';// Adjust the path to your actual component location
import DogWalker from './components/DogWalker';
import ImageSlider2 from './components/ImageSlider2';


const Page = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='mt-16'> {/* Adjust mt-16 based on your navbar height */}
        <ImageSlider />
        <div className='flex justify-around items-center gap-3'>
        <ImageSlider2/>
        <DogWalker/>
        </div>
      </div>
    </div>
  );
};

export default Page;
