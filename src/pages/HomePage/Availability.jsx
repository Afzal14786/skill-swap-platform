import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // For the dropdown icon
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Assuming shadcn/ui Avatar


const Availability = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availability, setAvailability] = useState('Any'); // Default availability
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAvailabilitySelect = (option) => {
    setAvailability(option);
    setIsDropdownOpen(false); // Close dropdown after selection
    if (onAvailabilityChange) {
      onAvailabilityChange(option); // Call parent handler if provided
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    if (onSearch) {
      onSearch(searchTerm, availability); // Pass current search term and availability to parent
    }
    // Optional: Clear search term after submission
    // setSearchTerm('');
  };

  const availabilityOptions = ['Any', 'Available Now', 'Next 24h', 'Next Week'];

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-4 p-4 rounded-lg">
      {/* Availability Dropdown */}
      <div className="relative">
        <button
          type="button" // Important: Prevent this button from submitting the form
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{availability}</span>
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-40 bg-gray-700 border border-gray-600 rounded-md shadow-lg z-10">
            {availabilityOptions.map((option) => (
              <button
                key={option}
                type="button" // Important: Prevent this button from submitting the form
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
      <div className="flex-grow flex items-center border-none rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for skills..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow p-2.5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

      {/* Optional: Avatar component (if you want it in the search bar area) */}
      {/* <Avatar className="w-10 h-10 flex-shrink-0">
        <AvatarFallback className="bg-gray-600 text-gray-200 flex items-center justify-center text-sm">U</AvatarFallback>
      </Avatar> */}
    </form>
  );
};

export default Availability