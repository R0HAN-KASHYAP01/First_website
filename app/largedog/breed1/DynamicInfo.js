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
            <p><strong>Group:</strong> Working Dogs</p>
            <p><strong>Weight:</strong> 30 – 40 Kgs</p>
            <p><strong>Height:</strong> 26 - 28 inches</p>
            <p><strong>Color(s):</strong> Doberman colors are black, red, blue, and fawn. He has rust markings above each eye; on his muzzle, throat, and chest; and on his legs and feet.</p>
            <p><strong>Coat:</strong> The Doberman Pinscher has a short, firm, smooth coat. It can be dark, chestnut, or grovel, all with tan markings. Dark and tan is generally normal. Markings are typically found on the gag, legs, feet, and mid-section. The Doberman Pinscher is a normal shedder. Any shading other that the recorded endorsed hues is viewed as a preclusion by the American Kennel Club.</p>
            <p><strong>Distinct Feature:</strong> The Doberman appreciates being a piece of a gang. He gets a kick out of the chance to be near those he adores and, when this adoration is available, he is a characteristic defender. He is dependable with his family's kids, companions, and visitors the length of he is dealt with benevolent. Regardless of his positive qualities, the Dobie isn't the right breed for everybody. He's expansive, at 60 to 80 pounds, and he's greatly dynamic, both physically and rationally. He needs a considerable measure of activity.</p>
          </div>
        )}
        {activeTab === 'temperament' && (
          <div>
            {/* Add temperament details here */}
            <p>Temperament details go here.</p>
          </div>
        )}
        {activeTab === 'character' && (
          <div>
            {/* Add character details here */}
            <p>Character details go here.</p>
          </div>
        )}
        {activeTab === 'activity' && (
          <div>
            {/* Add activity details here */}
            <p>Activity details go here.</p>
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
