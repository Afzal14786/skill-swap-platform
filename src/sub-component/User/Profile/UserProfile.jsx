import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ profile }) => {
  const {
    name,
    profilePhotoUrl,
    skillsOffered,
    skillsWanted,
    rating,
    avatarFallbackText,
  } = profile;

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/update-profile");
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 text-black">
      {/* Top Section: Name, Address, Avatar */}
      <div className="flex flex-col sm:flex-row justify-between items-start relative">
        {/* Text Content */}
        <div className="flex-1 mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-700">Navi Mumbai, Maharashtra 400709, India</p>
        </div>

        {/* Avatar - floats to top right on mobile */}
        <div className="absolute top-0 right-0 sm:static sm:ml-6">
          <Avatar className="w-20 h-20 shadow-md">
            <AvatarImage
              src={profilePhotoUrl}
              alt={`${name} Profile`}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-gray-600 text-gray-200 flex items-center justify-center text-xl font-semibold">
              {avatarFallbackText}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Other Info */}
      <div className="mt-8 space-y-6">
        {/* Skills Offered */}
        <div>
          <span className="text-green-500 font-semibold">Skills Offered:</span>
          <div className="flex flex-wrap gap-2 mt-2">
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
          <span className="text-blue-500 font-semibold">Skills Wanted:</span>
          <div className="flex flex-wrap gap-2 mt-2">
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

        {/* Availability & Profile Status */}
        <div className="text-sm text-gray-800 space-y-1">
          <p><span className="font-semibold">Availability:</span> Weekend</p>
          <p><span className="font-semibold">Profile:</span> Public</p>
        </div>
      </div>

      {/* Update Button */}
      <div className="mt-8 text-end">
        <Button onClick={handleUpdate}>Update Profile</Button>
      </div>
    </div>
  );
};

export default UserProfile;
