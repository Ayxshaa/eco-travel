import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSun } from "react-icons/fa";

const DesSearch = () => {
  return (
    <div className="des-search rounded-lg flex items-center shadow-md p-2 bg-white w-full max-w-3xl mx-auto">
      <div className="flex-1 text-center des-search-icon-text">
        <FaMapMarkerAlt className="text-gray-500" />
        <span className="text-gray-700">Destination</span>
      </div>
      <div className="border-l h-6 border-gray-300"></div>
      <div className="flex-1 text-center des-search-icon-text">
        <FaCalendarAlt className="text-gray-500" />
        <span className="text-gray-700">Dates</span>
      </div>
      <div className="border-l h-6 border-gray-300"></div>
      <div className="flex-1 text-center des-search-icon-text">
        <FaUser className="text-gray-500" />
        <span className="text-gray-700">People</span>
      </div>
      <div className="border-l h-6 border-gray-300"></div>
      <div className="flex-1 text-center des-search-icon-text">
        <FaSun className="text-gray-500" />
        <span className="text-gray-700">Experience</span>
      </div>
      <button className="des-search-button ml-4">Search</button>
    </div>
  );
};

export default DesSearch;
