"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({ large: false, medium: false, small: false });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (breed, value) => {
    if (!isOpen) {
      setDropdown(prev => ({ ...prev, [breed]: value }));
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (path) => {
    window.location.href = path; // Directly navigate to the path
    closeMenu(); // Close the menu after navigation (optional)
  };

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between px-4 bg-orange-400 text-black font-bold py-4 w-full z-50 cursor-pointer'>
      <div className="logo">
        <img src="/img/logo/logo4.png" alt="Your Logo" className="logo-img w-[100px] h-auto" />
      </div>

      <div className="lg:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={`lg:flex gap-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <li className='py-2' onClick={() => handleNavigation('/')}>Home</li>

        <li className='relative py-2'
          onMouseEnter={() => toggleDropdown('large', true)}
          onMouseLeave={() => toggleDropdown('large', false)}>
          <a onClick={() => handleNavigation('/largedog')}>LARGE DOG BREED</a>
          {dropdown.large && (
            <ul className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] bg-slate-300 text-black shadow-lg flex flex-wrap text-md'>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/largedog/Labrador')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Labrador
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/largedog/GermanShepherd')}>
                <MdKeyboardArrowRight className=' opacity-50' /> German Shepherd
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/largedog/Husky')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Husky
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/largedog/Boxer')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Boxer
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/largedog/GoldenRetriever')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Golden Retriever
              </li>
            </ul>
          )}
        </li>

        <li className='relative py-2'
          onMouseEnter={() => toggleDropdown('medium', true)}
          onMouseLeave={() => toggleDropdown('medium', false)}>
          <a onClick={() => handleNavigation('/Mediumdog')}>MEDIUM DOG BREED</a>
          {dropdown.medium && (
            <ul className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] bg-slate-300 text-black shadow-lg flex flex-wrap text-md'>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/Mediumdog/Beagle')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Beagle
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/Mediumdog/AmericanCocker')}>
                <MdKeyboardArrowRight className=' opacity-50' /> American Cocker
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/Mediumdog/ChowChow')}>
                <MdKeyboardArrowRight className=' opacity-50' /> ChowChow
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/Mediumdog/Dachshund')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Dachshund
              </li>
            </ul>
          )}
        </li>

        <li className='relative py-2'
          onMouseEnter={() => toggleDropdown('small', true)}
          onMouseLeave={() => toggleDropdown('small', false)}>
          <a onClick={() => handleNavigation('/smalldog')}>SMALL DOG BREED</a>
          {dropdown.small && (
            <ul className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] bg-slate-300 text-black shadow-lg flex flex-wrap text-md'>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/smalldog/Poodle')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Poodle
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/smalldog/Chihuahua')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Chihuahua
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/smalldog/Pekingese')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Pekingese
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/smalldog/Pomeranian')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Pomeranian
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/smalldog/ShihTzu')}>
                <MdKeyboardArrowRight className=' opacity-50' /> Shih Tzu
              </li>
              <li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center' onClick={() => handleNavigation('/smalldog/FrenchBulldog')}>
                <MdKeyboardArrowRight className=' opacity-50' /> French Bulldog
              </li>
            </ul>
          )}
        </li>

        <li className='py-2' onClick={() => handleNavigation('/dogWalker')}>DOG WALKER & TRAINER</li>
      </ul>
    </nav>
  );
}

export default Navbar;
