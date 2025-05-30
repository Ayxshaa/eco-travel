import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSun, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const DesSearch = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Desktop and Tablet View (md and larger) */}
      <div className="hidden md:flex des-search rounded-lg items-center shadow-md p-4 bg-white w-full max-w-3xl mx-auto">
        <div className="flex-1 text-center des-search-icon-text">
          <FaMapMarkerAlt className="inline-block mr-2 text-blue-900" />
          <span className="text-blue-900">Destination</span>
        </div>
        <div className="border-l h-6 border-gray-300"></div>
        <div className="flex-1 text-center des-search-icon-text">
          <FaCalendarAlt className="inline-block mr-2 text-blue-900" />
          <span className="text-blue-900">Dates</span>
        </div>
        <div className="border-l h-6 border-gray-300"></div>
        <div className="flex-1 text-center des-search-icon-text">
          <FaUser className="inline-block mr-2 text-blue-900" />
          <span className="text-blue-900">People</span>
        </div>
        <div className="border-l h-6 border-gray-300"></div>
        <div className="flex-1 text-center des-search-icon-text">
          <FaSun className="inline-block mr-2 text-blue-900" />
          <span className="text-blue-900">Experience</span>
        </div>
        <button className="des-search-button bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg ml-4">
          Search
        </button>
      </div>

      {/* Mobile View (small screens) */}
      <div className="md:hidden">
        <div className="des-search rounded-lg flex items-center justify-between shadow-md p-4 bg-white w-full max-w-xs mx-auto gap-5">
          <div className="flex items-center">
            <FaSearch className="text-blue-900 mr-2" />
            <span className="text-blue-900">Search</span>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="bg-teal-600 text-white p-2 rounded-lg"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="bg-white shadow-md rounded-lg mt-2 p-4 max-w-xs mx-auto">
            <div className="des-search-icon-text py-3 border-b border-gray-100">
              <FaMapMarkerAlt className="inline-block mr-3 text-blue-900" />
              <span className="text-blue-900">Destination</span>
            </div>
            <div className="des-search-icon-text py-3 border-b border-gray-100">
              <FaCalendarAlt className="inline-block mr-3 text-blue-900" />
              <span className="text-blue-900">Dates</span>
            </div>
            <div className="des-search-icon-text py-3 border-b border-gray-100">
              <FaUser className="inline-block mr-3 text-blue-900" />
              <span className="text-blue-900">People</span>
            </div>
            <div className="des-search-icon-text py-3">
              <FaSun className="inline-block mr-3 text-blue-900" />
              <span className="text-blue-900">Experience</span>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg w-full mt-4">
              Search
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DesSearch;