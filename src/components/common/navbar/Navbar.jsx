import React, { useState } from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        ZUBOX
      </div>
      
      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <NavLink href="#discover" text="Discover" active />
        <NavLink href="#about" text="About us" />
        <NavLink href="#blog" text="Blog" />
        <NavLink href="#contact" text="Contact us" />
      </div>
      
      {/* Right Section: Search and Language */}
      <div className="navbar-right">
        <button className="navbar-search-button">
          <Search size={20} />
        </button>
        
        <div className="navbar-language-selector">
          <span>{language}</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
        
        {/* Hamburger Menu Icon */}
        <button 
          className="navbar-hamburger md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, text, active }) => {
  return (
    <a 
      href={href} 
      className={`navbar-link ${active ? 'navbar-link-active' : ''}`}
    >
      {text}
    </a>
  );
};

export default Navbar;
