import React from "react";
import DesSearch from "../search/DesSearch";
import Features from "../ui/Features";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1742268351241-b1b2ccae70c5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-6xl font-bold">Your adventure starts here</h1>
        </div>
      </div>
      
      {/* Destination Search Section */}
      <div className="flex justify-center -mt-10 relative z-20">
        <DesSearch />
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 mt-12">
        <Features />
      </div>
    </div>
  );
};

export default Home;
