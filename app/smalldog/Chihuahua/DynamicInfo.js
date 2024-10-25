"use client"
import React, { useState } from 'react';

const BreedDetails = () => {
  const [activeTab, setActiveTab] = useState('details');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-4 md:px-8 py-3">
      <div className="border-b-2">
        <ul className=" flex flex-col md:flex-row flex-wrap font-bold">
          <li className={`hover:bg-slate-400 p-2 cursor-pointer m-auto md:m-1 w-full md:w-fit ${activeTab === 'details' ? 'bg-blue-800 text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('details')}>BREED DETAILS</li>
          <li className={`hover:bg-slate-400 p-2 cursor-pointer m-auto md:m-1 w-full md:w-fit ${activeTab === 'temperament' ? 'bg-blue-800 text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('temperament')}>TEMPERAMENT</li>
          <li className={`hover:bg-slate-400 p-2 cursor-pointer m-auto md:m-1 w-full md:w-fit ${activeTab === 'character' ? 'bg-blue-800 text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('character')}>CHARACTER</li>
          <li className={`hover:bg-slate-400 p-2 cursor-pointer m-auto md:m-1 w-full md:w-fit ${activeTab === 'activity' ? 'bg-blue-800 text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('activity')}>ACTIVITY</li>
          <li className={`hover:bg-slate-400 p-2 cursor-pointer m-auto md:m-1 w-full md:w-fit ${activeTab === 'reviews' ? 'bg-blue-800 text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('reviews')}>REVIEWS</li>
        </ul>
      </div>
      <div className="mt-4">
        {activeTab === 'details' && (
          <div className='flex flex-col gap-5'>
            <p><strong>Group:</strong> Hound</p>
            <p><strong>Weight:</strong> 6 – 8Kgs</p>
            <p><strong>Height:</strong> 30 - 32 Cms</p>
            <p><strong>Color(s):</strong> Any true hound color (Tricolor).</p>
            <p><strong>Coat:</strong> Beagles have a very sleek and shorthaired coat. The Beagle has a hound type coat of medium length making grooming relatively easy for this breed.</p>
            <p><strong>Distinct Feature:</strong>The Beagle is full of energy and does great in a family environment. They are very lively, active, and high energy making a wonderful child's companion given the proper socialization. This breed is alert and of even temperament and should never show signs of aggression or timidity.</p>
          </div>
        )}
        {activeTab === 'temperament' && (
          <div className='flex flex-col gap-5'>
            <p><strong>TEMPERAMENT:</strong> The Beagle is an all around happy dog that makes a wonderful companion for many different families. This breed adapts to many different environments and lifestyles, if not all. The Beagle is very eager to please, and is very intelligent however training must be consistent as this breed tends to lose interest and focus on something that catches his attention. This breed does extremely well with children, and can do exceptionally well with other pets if socialized properly. SELECTED BREEDS</p>
          </div>
        )}
        {activeTab === 'character' && (
          <div className='flex flex-col gap-5'>
            <p><strong>CHARACTER:</strong>Beagles are tender, sweet, and clever. They will make you snicker, however that is the point at which they're not making you cry due to their regularly devious conduct. Beagle individuals invest a considerable measure of energy attempting to outmaneuver their pooches, and they frequently must turn to sustenance prizes to draw the Beagle into a condition of makeshift compliance.</p>
            <p>Like each canine, the Beagle needs early socialization — presentation to a wide range of individuals, sights, sounds, and encounters — when they're youthful. Socialization aides guarantee that your Beagle puppy grows up to be a balanced po.</p>
          </div>
        )}
        {activeTab === 'activity' && (
          <div className='flex flex-col gap-5'>
            <p><strong>ACTIVITY:</strong> The Beagle is fairly active and loves long and vigorous walks.</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className='flex flex-col gap-5'>
            {/* Add reviews here */}
            <p>Reviews go here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BreedDetails;
