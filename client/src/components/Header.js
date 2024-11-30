import React, { useState, useEffect } from 'react';
import banner1 from '../pages/images/logob.jpg';
import banner2 from '../pages/images/logob2.jpg';
import banner3 from '../pages/images/theatre.jpg';

const links = [
  { name: 'Animation', href: '#' },
  { name: 'Drama', href: '#' },
  { name: 'Romance', href: '#' },
  { name: 'Action', href: '#' },
  { name: 'Sci-Fi', href: '#' }
];

const Header = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 h-screen flex justify-center items-center bg-primary">
      <div className="absolute inset-0 flex items-center justify-center">
        {[banner1, banner2, banner3].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`banner${index + 1}`}
            className={`header-img absolute inset-0 z-0 object-cover object-center transition-opacity ${
              index === currentBannerIndex ? 'opacity-70' : 'opacity-0'
            }`}
            style={{ width: '100%', height: '100%' }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-4">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
          Welcome to Cinemark
        </h2>
        <p className="mt-8 text-lg text-center leading-8 text-gray-300 max-w-8xl px-6">
          Experience the magic of great performances! Whether you're a fan of drama, animation, romance, action, or sci-fi, we have something special for you. Join us for an unforgettable journey into the world of theater.
        </p>

        
      </div>
    </div>
  );
};

export default Header;
