import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const SkillSwapForm = ({ skillsOffered = [], skillsWanted = [] }) => {
  const [selectedUserSkill, setSelectedUserSkill] = useState('');
  const [selectedTheirSkill, setSelectedTheirSkill] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      offeredSkill: selectedUserSkill,
      wantedSkill: selectedTheirSkill,
      message,
    };

    console.log("Swap Request Submitted:", formData);
    // API call or logic here
  };


    console.log("userSkills:", skillsOffered);
    console.log("theirSkills:", skillsWanted);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 mt-20 rounded-2xl shadow-md w-full max-w-md mx-auto space-y-6 border border-gray-300"
    >
      {/* Your Skills Dropdown */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">
          Choose one of your offered skills
        </label>
        <select
          value={selectedUserSkill}
          onChange={(e) => setSelectedUserSkill(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select your skill</option>
          {skillsOffered.length > 0 ? (
            skillsOffered.map((skill, idx) => (
              <option key={idx} value={skill}>
                {skill}
              </option>
            ))
          ) : (
            <option disabled>No skills offered</option>
          )}
        </select>
      </div>

      {/* Their Skills Dropdown */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">
          Choose one of their wanted skills
        </label>
        <select
          value={selectedTheirSkill}
          onChange={(e) => setSelectedTheirSkill(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select wanted skill</option>
          {skillsWanted.length > 0 ? (
            skillsWanted.map((skill, idx) => (
              <option key={idx} value={skill}>
                {skill}
              </option>
            ))
          ) : (
            <option disabled>No skills listed</option>
          )}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Write a message..."
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Submit Swap Request
        </Button>
      </div>
    </form>
  );
};

export default SkillSwapForm;
