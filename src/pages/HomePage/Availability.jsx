import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Optional avatar

const Availability = ({ onSearch, onAvailabilityChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availability, setAvailability] = useState('Any');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAvailabilitySelect = (option) => {
    setAvailability(option);
    setIsDropdownOpen(false);
    if (onAvailabilityChange) onAvailabilityChange(option);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (onSearch) onSearch(searchTerm, availability);
  };

  const availabilityOptions = ['Any', 'Available Now', 'Next 24h', 'Next Week'];

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg w-full"
    >
      {/* Availability Dropdown */}
      <div className="relative w-full md:w-auto">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full md:w-48 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{availability}</span>
          <ChevronDown
            className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-full md:w-48 bg-gray-700 border border-gray-600 rounded-md shadow-lg z-10">
            {availabilityOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleAvailabilitySelect(option)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition duration-150"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row w-full gap-3">
        <input
          type="text"
          placeholder="Search for skills..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow p-2.5 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

      {/* When you search skill, it shows the profiles with images */}
      
      {/* <Avatar className="w-10 h-10 flex-shrink-0">
        <AvatarFallback className="bg-gray-600 text-gray-200 flex items-center justify-center text-sm">U</AvatarFallback>
      </Avatar>  */}
     
    </form>
  );
};

export default Availability;
