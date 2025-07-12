import React from 'react';
import ProfileCard from '@/sub-component/ProfileCard/ProfileCard';
import profiles from '@/data/profiles';
import Availability from './Availability';

const HomePage = () => {
  return (
    <>
      {/* Searching Bar */}
      <div className="max-w-4xl mx-auto mb-10">
        <Availability/>
      </div>

      <div className="p-8 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl font-extrabold text-black text-center mb-10">
          Discover Talented Swappers
        </h1>

        <div className="max-w-4xl mx-auto"> {/* Container to center and limit width of cards */}
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage