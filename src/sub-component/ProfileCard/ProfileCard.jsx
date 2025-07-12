// import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Assuming shadcn/ui Avatar

const ProfileCard = ({ profile }) => {
  const {
    name,
    profilePhotoUrl,
    skillsOffered,
    skillsWanted,
    rating,
    avatarFallbackText,
  } = profile;
  return (
    <>
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex items-center justify-between mb-6 card-profile">
        {/* Added mb-6 for vertical spacing between cards */}
        <div className="flex items-center">
          {/* Profile Photo / Avatar */}
          <Avatar className="w-24 h-24 flex-shrink-0 mr-6">
            {/* Fixed size for avatar */}
            <AvatarImage
              src={profilePhotoUrl}
              alt={`${name} Profile`}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-gray-600 text-gray-200 flex items-center justify-center text-xl font-semibold">
              {avatarFallbackText}
            </AvatarFallback>
          </Avatar>

          {/* Profile Details */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            {/* Skills Offered */}
            <div className="mb-2 ml-2">
              <span className="text-green-400 font-semibold">
                Skills Offered :{" "}
              </span>
              <div className="inline-flex flex-wrap gap-2">
                {" "}
                {/* Use inline-flex to keep it on the same line as "Skills Offered :" */}
                {skillsOffered.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-700 text-green-100 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* skill wanted */}
            <div>
              <span className="text-blue-400 font-semibold">
                Skills Wanted :{" "}
              </span>
              <div className="inline-flex flex-wrap gap-2">
                {skillsWanted.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Request Button and Rating */}
        <div className="flex flex-col items-end justify-between h-full">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 shadow-md">
            Request
          </button>
          <div className="text-sm mt-4">
            rating: <span className="font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
