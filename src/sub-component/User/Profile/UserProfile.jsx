// components/UserProfile.tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Assuming shadcn/ui Avatar
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
    navigate('/update-profile');
  }
  return (
    <>
      <div className="flex flex-row justify-between max-w-60% max-h-100vh mt-10 text-black p-5 rounded-lg">
        <div className="flex md:flex-row md:items-start md:space-x-6">
          <div className="flex flex-col">
            <div className="md:ml-30 font-semibold leading-10">
              <p>{name}</p>
              <p>{`Navi Mumbai Maharashtra 400709 India`}</p>

              {/* skill offered */}
              <div>
                <span className="text-green-400 font-semibold">
                  Skills Offered :{" "}
                </span>
                <div className="inline-flex flex-wrap gap-3">
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

              <p>Availability : {`Weekend`}</p>

              <p>Profile : {`Public`}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-30">
          <div className="self-center mb-10">
            <Avatar className="w-35 h-35 flex-shrink-0 mr-6">
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
          </div>
          <div>
            <span className="text-blue-400 font-semibold">Skills Wanted : </span>
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

      <div className="mt-10 text-end mx-50">
          <Button type="submit" className="w-30px" onClick={handleUpdate}>
              Update Profile
          </Button>
      </div>
    </>
  );
};

export default UserProfile;
