// components/UserProfile.tsx

const UserProfile = () => {
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    location: "San Francisco, CA",
    avatar:
      "https://i.pravatar.cc/150?img=47", // Random avatar
    bio: "Frontend developer passionate about UI/UX and open source.",
    skills : ["C++", "JS", "ReactJS", "NextJS", "MERN"],
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="User avatar"
          className="w-32 h-32 rounded-full border object-cover"
        />

        {/* Info */}
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.location}</p>

          <p className="mt-4 text-gray-700">{user.bio}</p>

          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
