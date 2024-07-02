'use client'
import React, { useState } from 'react';

const BreedDetails = () => {
  const [activeTab, setActiveTab] = useState('details');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-8 py-3">
      <div className="border-b-2">
        <ul className="flex font-bold">
          <li className={`hover:bg-slate-400 mr-4 p-2 cursor-pointer ${activeTab === 'details' ? 'bg-blue-800  text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('details')}>BREED DETAILS</li>
          <li className={`hover:bg-slate-400 mr-4 p-2 cursor-pointer ${activeTab === 'temperament' ? 'bg-blue-800   text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('temperament')}>TEMPERAMENT</li>
          <li className={`hover:bg-slate-400 mr-4 p-2 cursor-pointer ${activeTab === 'character' ? 'bg-blue-800  text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('character')}>CHARACTER</li>
          <li className={`hover:bg-slate-400 mr-4 p-2 cursor-pointer ${activeTab === 'activity' ? 'bg-blue-800  text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('activity')}>ACTIVITY</li>
          <li className={`hover:bg-slate-400 mr-4 p-2 cursor-pointer ${activeTab === 'reviews' ? 'bg-blue-800  text-white border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('reviews')}>REVIEWS</li>
        </ul>
      </div>
      <div className="mt-4">
        {activeTab === 'details' && (
          <div className='flex flex-col gap-5'>
            <p><strong>Group:</strong> Companion Dogs</p>
            <p><strong>Weight:</strong> 6 – 8Kgs</p>
            <p><strong>Height:</strong> 8 - 12 inches</p>
            <p><strong>Color(s):</strong> Poodles are in many colors, including blue, black, white , gray, silver, brown, apricot and cream. </p>
            <p><strong>Coat:</strong> The coat comes in numerous hues, including blue, dark , white, dim, silver, cocoa, bistro au-lait, apricot, and cream. The hair is wavy, wiry and thick, and this one of a kind surface can be trimmed, cut, prepped, shaved, and generally controlled into a wide range of whimsical shapes. On the off chance that your puppy is going to contend in the show ring, then again, you can't too wild with the styling.</p>
            <p><strong>Distinct Feature:</strong>  Intelligence commonplace Poodles area unit among the foremost intelligent of breeds. They learn terribly quickly. most traditional Poodles even have a decent sense of fun. they have a tendency to be quite sensitive to their homeowners moods and can adapt their approach consequently. though their intelligence makes them simple to coach, it'll conjointly challenge you to stay a step sooner than them. They need additional intellectual challenges to stay them from inventing their own diversions.</p>
          </div>
        )}
        {activeTab === 'temperament' && (
          <div className='flex flex-col gap-5'>
            <p><strong>TEMPERAMENT:</strong> One of the most popular breeds in the world, the Poodle is loyal and deeply devoted to their owner and family. They thrive on human companionship and are extremely sensitive to their familys moods and emotions. The Poodle may become overly attached to one particular family member and suffer from separation anxiety.</p>
          </div>
        )}
        {activeTab === 'character' && (
          <div className='flex flex-col gap-5'>
            <p><strong>CHARACTER:</strong> Savvy, adoring, faithful, and fiendish are four words Poodle devotees ordinarily use to depict the breed's identity. The Poodle is likewise known for what his fans call "a quality of refinement": a noble demeanor that is difficult to depict, yet simple to spot in the pooch.</p>
            <p>Regardless of his lofty appearance, the Poodle has a goofy streak and loves to play — he's generally up for a session of any sort. He's likewise extremely enamored with individuals and anxious to satisfy. Join that with his fanciful knowledge, and you've got a puppy that is profoundly trainable</p>
          </div>
        )}
        {activeTab === 'activity' && (
          <div className='flex flex-col gap-5'>
          <p><strong>ACTIVITY:</strong> In the event that you ruin your Poodle and don't prepare him, he's prone to presume that he's the alpha pooch of the crew. This is particularly basic among the littler mixed bags — Toy Poodles — who are more inclined to be cossetted and untrained. Show your puppy great canine conduct, and afterward demand that he utilize them; it demonstrates to him that you're the pioneer of the pack.</p>
        </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            {/* Add reviews here */}
            <p>Reviews go here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BreedDetails;
