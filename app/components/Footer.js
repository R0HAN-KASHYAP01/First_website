// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Logo</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          <a href="/largedog" className="hover:text-gray-400">LARGE DOG BREED</a>
          <a href="/mediumdog" className="hover:text-gray-400">MEDIUM DOG BREED</a>
          <a href="/smalldog" className="hover:text-gray-400">SMALL DOG BREED</a>
          <a href="/dogWalker" className="hover:text-gray-400">DOG WALKER & TRAINER</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Dog Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
