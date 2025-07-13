import { useParams } from "react-router-dom";
import SkillSwapForm from "@/sub-component/User/SwapRequestPage/SkillSwapForm";
import profiles from "@/data/profiles"; // assuming your user data is here

const SkillExchange = () => {
  const { id } = useParams(); // grabs the ID from the URL
  const profile = profiles.find((user) => String(user.id) === String(id));

  if (!profile) {
    return <div className="text-center mt-10 text-red-500">User not found</div>;
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 py-8">
      <SkillSwapForm
        skillsOffered={profile.skillsOffered || []}
        skillsWanted={profile.skillsWanted || []}
      />
    </div>
  );
};

export default SkillExchange;
