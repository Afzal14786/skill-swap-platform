import profiles from "@/data/profiles";
import UpdateProfile from "@/sub-component/User/Profile/UpdateProfile/UpdateProfile";

const UpdateProfilePage = () => {
  return (
    <>
        <UpdateProfile profile={profiles[0]}/>
    </>
  );
}

export default UpdateProfilePage