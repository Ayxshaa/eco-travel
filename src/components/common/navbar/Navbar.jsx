import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Close menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar relative z-50">
      {/* Logo */}
      <div className="navbar-logo">
        ZUBOX
      </div>
      
      {/* Nav Links for Desktop */}
      <div className="navbar-links">
        <NavLink href="#discover" text="Discover" active />
        <NavLink href="#about" text="About us" />
        <NavLink href="#blog" text="Blog" />
        <NavLink href="#contact" text="Contact us" />
      </div>
      
      {/* Right Section */}
      <div className="navbar-right">
        <button className="navbar-search-button">
          <Search size={20} />
        </button>
        <div className="hidden sm:flex navbar-language-selector">
          <span>{language}</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
        
        {/* Hamburger Icon */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu - fixed position overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-teal-600 to-blue-900 shadow-md flex flex-col space-y-4 md:hidden z-50 py-4 px-8">
          <NavLink href="#discover" text="Discover" active />
          <NavLink href="#about" text="About us" />
          <NavLink href="#blog" text="Blog" />
          <NavLink href="#contact" text="Contact us" />
          <div className="sm:hidden flex items-center text-white cursor-pointer pt-2">
            <span>{language}</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, text, active }) => {
  return (
    <a 
      href={href} 
      className={active ? "navbar-link navbar-link-active" : "navbar-link"}
    >
      {text}
    </a>
  );
};

export default Navbar;