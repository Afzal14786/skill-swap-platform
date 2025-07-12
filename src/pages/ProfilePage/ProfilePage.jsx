import UserProfile from '@/sub-component/User/Profile/UserProfile'
import profiles from '@/data/profiles';

const ProfilePage = () => {
  return (
    <>
        <UserProfile profile={profiles[0]}/>
    </>
  );
}

export default ProfilePage