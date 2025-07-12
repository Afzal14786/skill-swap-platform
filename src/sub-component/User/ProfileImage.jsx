import { Avatar } from "@/components/ui/avatar"
import './UserProfile.css' // Correctly imports the CSS file
import { useNavigate } from "react-router-dom";


const ProfileImage = () => {
  const navigate = useNavigate();

  
  return (
    <>
        <Avatar>
          <div className="w-60 h-60 md:w-20 md:h-20 rounded-full overflow-hidden cursor-pointer transition" onClick={() => navigate("/profile")}>
            <img src="/media/images/avatar.jpeg" alt="profile image" />
          </div>
        </Avatar>
        <Avatar></Avatar>
    </>
  );
}

export default ProfileImage