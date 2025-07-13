import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SwapRequest = ({ profile }) => {
  const {
    name,
    profilePhotoUrl,
    skillsOffered,
    skillsWanted,
    rating,
    avatarFallbackText,
  } = profile;

  const navigate = useNavigate();

  const handleSkillExchange = () => {
    navigate("/skill-exchange");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Swap Button */}
      <div className="mb-8 flex justify-center sm:justify-start">
        <Button
          className="bg-blue-500 text-black font-semibold text-xl px-6 py-4 hover:text-white"
          onClick={handleSkillExchange}
        >
          Request Swap
        </Button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">{name}</h1>

          {/* Skills Offered */}
          <div>
            <span className="text-green-400 text-xl font-semibold">Skills Offered: </span>
            <div className="inline-flex flex-wrap gap-2 mt-2">
              {skillsOffered.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-700 text-green-100 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Wanted */}
          <div>
            <span className="text-blue-400 text-xl font-semibold">Skills Wanted: </span>
            <div className="inline-flex flex-wrap gap-2 mt-2">
              {skillsWanted.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Rating Section */}
          <div className="text-center lg:text-left mt-4">
            <span className="text-yellow-400 text-2xl font-medium">Rating:</span>
            <span className="text-black text-xl ml-4 font-semibold">{rating}</span>
            <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-2">
              {parseFloat(rating) >= 4.5 && (
                <>
                  <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs">Very Collaborative</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Creative Thinker</span>
                </>
              )}
              {parseFloat(rating) >= 4.0 && parseFloat(rating) < 4.5 && (
                <>
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs">Skilled Mentor</span>
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs">Fast Responder</span>
                </>
              )}
              {parseFloat(rating) < 4.0 && (
                <>
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs">Great Potential</span>
                  <span className="bg-yellow-700 text-white px-3 py-1 rounded-full text-xs">Needs Guidance</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/3 mb-6 lg:mb-0">
          <Avatar className="w-36 h-36 shadow-xl">
            <AvatarImage
              src={profilePhotoUrl}
              alt={`${name} Profile`}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-gray-600 text-gray-200 text-2xl font-bold flex items-center justify-center">
              {avatarFallbackText}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default SwapRequest;
