
import React, { useState } from 'react';
import logo from '../pages/images/logo.png';
import { Link } from 'react-router-dom';

const Navb = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return  (
    <nav className="flex flex-row items-end justify-between p-1 bg-[#052736]"> 
      <div className="flex items-center flex-shrink-0 ml-2"> 
        <img src={logo} alt="brand logo" className="h-10" /> 
      </div>

      <div className="text-xl font-sans text-white mt-0 space-x-8 sm:space-x-12"> 
  <a href="#shows" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
    SHOWS
  </a>
  <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
    ABOUT
  </a>
  <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
    CONTACT
  </a>
</div>


      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className={`absolute top-0 left-0 w-full bg-secondary ${isMenuOpen ? "block z-10" : "hidden"} lg:hidden`}>
        <div className="text-lg font-sans text-teal-800 mt-4">
          <a href="#shows" className="block px-4 py-2 hover:bg-slate-200">
            SHOWS
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-slate-200">
            ABOUT US
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-slate-200">
            CONTACT
          </a>
          <Link to="/login" className="block px-4 py-2 hover:bg-slate-200">LOGIN</Link>
        </div>
      </div>

      <div className="hidden lg:block mr-2">
        <Link to="/login" className="inline-block text-mdx px-2 py-1 leading-none border rounded text-white bg-primary hover:border-transparent mt-4 lg:mt-0">Log In</Link> {/* Adjusted padding and font size */}
      </div>
    </nav>
  );
};

export default Navb;
