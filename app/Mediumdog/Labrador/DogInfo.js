// components/DogInfo.js
import Image from 'next/image';
import { IoCall } from "react-icons/io5";


const DogInfo = () => {
  return (
    <div className="container mx-auto p-4 mt-10 px-6">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-4xl font-bold">Labrador</h1>
        <div className="flex space-x-1 my-2">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="">★</span>
        </div>
        <h2 className="text-xl font-semibold text-red-500">Quick Contact</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>25 Years of Experience</li>
          <li>All India Home Delivery</li>
          <li>Dogs, Cat & Birds Available</li>
          <li>100% Pure Breed</li>
          <li>With KCI Paper</li>
          <li>Life Long Breed Guarantee</li>
          <li>Call/Whatsapp for More Details:</li>
        </ul>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded flex items-center gap-2 cursor-pointe hover:bg-red-400 hover:font-bold">
        <IoCall />

          Call Now
        </button>
      </div>
    </div>
  );
};

export default DogInfo;
