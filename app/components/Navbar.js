"use client"
import React, { useState } from 'react';
import Link from 'next/link';
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

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between px-4 bg-slate-800 text-white py-4 w-full z-50'>
      <div className="logo font-bold">LOGO</div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={`md:flex gap-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link href='/'><li className='py-2'>Home</li></Link>
        
        <li className='relative py-2'
          onMouseEnter={() => toggleDropdown('large', true)}
          onMouseLeave={() => toggleDropdown('large', false)}>
          <Link href='/largedog'>LARGE DOG BREED</Link>
          {dropdown.large && (
            <ul className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] bg-slate-300 text-black shadow-lg flex flex-wrap text-md'>
              <Link href='/largedog/breed1'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 1</li></Link>
              <Link href='/largedog/breed2'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 2</li></Link>
              <Link href='/largedog/breed3'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 3</li></Link>
              <Link href='/largedog/breed4'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 4</li></Link>
              <Link href='/largedog/breed5'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 5</li></Link>
              <Link href='/largedog/breed6'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 6</li></Link>
              <Link href='/largedog/breed7'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 7</li></Link>
              <Link href='/largedog/breed8'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Breed 8</li></Link>
            </ul>
          )}
        </li>

        <li className='relative py-2'
          onMouseEnter={() => toggleDropdown('medium', true)}
          onMouseLeave={() => toggleDropdown('medium', false)}>
          <Link href='/Mediumdog'>MEDIUM DOG BREED</Link>
          {dropdown.medium && (
            <ul className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] bg-slate-300 text-black shadow-lg flex flex-wrap text-md'>
              <Link href='/Mediumdog/Labrador'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Labrador</li></Link>
              <Link href='/Mediumdog/Husky'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Husky</li></Link>
              <Link href='/Mediumdog/GermanShepherd'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> German Shepherd</li></Link>
            </ul>
          )}
        </li>

        <li className='relative py-2'
          onMouseEnter={() => toggleDropdown('small', true)}
          onMouseLeave={() => toggleDropdown('small', false)}>
          <Link href='/smalldog'>SMALL DOG BREED</Link>
          {dropdown.small && (
            <ul className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] bg-slate-300 text-black shadow-lg flex flex-wrap text-md'>
              <Link href='/smalldog/Poodle'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Poodle</li></Link>
              <Link href='/smalldog/Beagle'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> Beagle</li></Link>
              <Link href='/smalldog/AmericanCocker'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> American Cocker</li></Link>
              
              <Link href='/smalldog/FrenchBulldog'><li className='py-2 px-4 hover:bg-gray-200 flex justify-center items-center'> 
                <MdKeyboardArrowRight className=' opacity-50' /> French Bulldog</li></Link>
              
            </ul>
          )}
        </li>
        
        <Link href='/contact'><li className='py-2'>CONTACT US</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
