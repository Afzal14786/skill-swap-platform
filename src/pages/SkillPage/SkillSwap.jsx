import SwapRequest from "@/sub-component/User/SwapRequestPage/SwapRequest";
import profiles from "@/data/profiles";
import { useParams } from "react-router-dom";

const SkillSwap = () => {
  const {id} = useParams();

  const profileId = profiles.find((p) => p.id === id);

  return (
        <>
          <SwapRequest profile={profileId}/>
        </>
  );
}

export default SkillSwap