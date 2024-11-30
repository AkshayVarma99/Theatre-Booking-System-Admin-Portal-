import React from 'react';
import insta from '../pages/images/insta.jpg';
import facebook from '../pages/images/facebook.jpg';
import twitter from '../pages/images/twitter.jpg';
import home from '../pages/images/home.jpg';

function Footer() {
  return (
    <footer className="bg-primary text-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h4 className="text-2xl font-bold mb-2 text-center">Explore</h4>
        <ul className="flex flex-wrap justify-center items-center text-center">
            <li className="mx-2">
              <a href="/" className="hover:text-gray-300 transition-colors duration-300">
                <img src={home} alt="Home" className="h-8 w-8 mx-auto mb-1" />
                Home
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.facebook.com/example" className="hover:text-gray-300 transition-colors duration-300">
                <img src={facebook} alt="Facebook" className="h-8 w-8 mx-auto mb-1" />
                Facebook
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.instagram.com/example" className="hover:text-gray-300 transition-colors duration-300">
                <img src={insta} alt="Instagram" className="h-8 w-8 mx-auto mb-1" />
                Instagram
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com/example" className="hover:text-gray-300 transition-colors duration-300">
                <img src={twitter} alt="Twitter" className="h-8 w-8 mx-auto mb-1" />
                Twitter
              </a>
            </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
