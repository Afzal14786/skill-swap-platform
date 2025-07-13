import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

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
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 mb-6 card-profile">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Left Section - Avatar and Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1">
          {/* Avatar */}
          <Link to={`/user/${profile.id}`}>
            <Avatar className="w-24 h-24 flex-shrink-0">
              <AvatarImage
                src={profilePhotoUrl}
                alt={`${name} Profile`}
                className="object-cover rounded-full"
              />
              <AvatarFallback className="bg-gray-600 text-gray-200 flex items-center justify-center text-xl font-semibold">
                {avatarFallbackText}
              </AvatarFallback>
            </Avatar>
          </Link>

          {/* Details */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>

            {/* Skills Offered */}
            <div className="mb-2">
              <span className="text-green-400 font-semibold">
                Skills Offered:
              </span>
              <div className="inline-flex flex-wrap gap-2 mt-1 justify-center sm:justify-start">
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

            {/* Skills Wanted */}
            <div>
              <span className="text-blue-400 font-semibold">
                Skills Wanted:
              </span>
              <div className="inline-flex flex-wrap gap-2 mt-1 justify-center sm:justify-start">
                {skillsWanted.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-700 text-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Request Button & Rating */}
        <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 shadow-md w-full sm:w-auto">
            Request
          </button>
          <div className="text-sm text-center lg:text-right">
            Rating: <span className="font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
