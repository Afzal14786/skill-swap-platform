import React, { useState, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { X, Pencil, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = ({ profile }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(profile.name);
  const [location, setLocation] = useState(profile.location || "");
  const [skillsOffered, setSkillsOffered] = useState(profile.skillsOffered || []);
  const [skillsWanted, setSkillsWanted] = useState(profile.skillsWanted || []);
  const [availability, setAvailability] = useState(profile.availability || "");
  const [isPublic, setIsPublic] = useState(profile.isPublic || false);
  const [newSkillOffered, setNewSkillOffered] = useState("");
  const [newSkillWanted, setNewSkillWanted] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(profile.profilePhotoUrl);

  const fileInputRef = useRef(null);

  const handleAddSkill = (type) => {
    if (type === "offered" && newSkillOffered.trim()) {
      setSkillsOffered([...skillsOffered, newSkillOffered.trim()]);
      setNewSkillOffered("");
    } else if (type === "wanted" && newSkillWanted.trim()) {
      setSkillsWanted([...skillsWanted, newSkillWanted.trim()]);
      setNewSkillWanted("");
    }
  };

  const handleRemoveSkill = (type, index) => {
    if (type === "offered") {
      const updatedSkills = [...skillsOffered];
      updatedSkills.splice(index, 1);
      setSkillsOffered(updatedSkills);
    } else {
      const updatedSkills = [...skillsWanted];
      updatedSkills.splice(index, 1);
      setSkillsWanted(updatedSkills);
    }
  };

  const handleAvatarEdit = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  const handleAvatarDelete = () => {
    setAvatarUrl("");
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8 gap-4">
        <div className="flex flex-col justify-start pt-1">
          <h2 className="text-2xl font-bold mb-1">Update Profile</h2>
          <p className="text-lg font-medium text-gray-800">{name}</p>
        </div>

        <div className="relative group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <Avatar className="w-full h-full">
            <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
            <AvatarFallback>{profile.avatarFallbackText}</AvatarFallback>
          </Avatar>

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300 rounded-full">
            <button
              className="text-white hover:text-gray-300"
              onClick={handleAvatarEdit}
            >
              <Pencil size={18} />
            </button>
            <button
              className="text-white hover:text-red-400"
              onClick={handleAvatarDelete}
            >
              <Trash2 size={18} />
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Profile Form */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          </div>

          <div>
            <p className="font-semibold mb-1">Skills Offered</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center bg-green-700 text-green-100 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {skill}
                  <X
                    size={12}
                    className="ml-1 cursor-pointer"
                    onClick={() => handleRemoveSkill("offered", idx)}
                  />
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Add Skill"
                value={newSkillOffered}
                onChange={(e) => setNewSkillOffered(e.target.value)}
              />
              <Button onClick={() => handleAddSkill("offered")}>Add</Button>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">Skills Wanted</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {skillsWanted.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center bg-blue-700 text-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {skill}
                  <X
                    size={12}
                    className="ml-1 cursor-pointer"
                    onClick={() => handleRemoveSkill("wanted", idx)}
                  />
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Add Skill"
                value={newSkillWanted}
                onChange={(e) => setNewSkillWanted(e.target.value)}
              />
              <Button onClick={() => handleAddSkill("wanted")}>Add</Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
            <Input
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="Availability"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium">Profile : Public</span>
            <Switch checked={isPublic} onCheckedChange={setIsPublic} />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <Link to={'/profile'}><Button className="bg-green-800 w-full sm:w-auto">Save Profile</Button></Link>
            <Link to={'/profile'}><Button className="bg-red-800 w-full sm:w-auto">Discard</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;