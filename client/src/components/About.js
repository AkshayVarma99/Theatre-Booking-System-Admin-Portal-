import React from 'react';
import aboutus from '../pages/images/aboutus.jpg';

const About = () => {
  return (
    <div className="bg-primary py-16">  
      <div className="container mx-auto px-6 md:px-12 xl:px-24 py-8">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">  
          <div className="order-2 md:order-1">  
            <img
              src={aboutus}
              alt="Theater scene or performance"
              className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2 text-white text-center md:text-left space-y-4">  
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Step into the Spotlight
            </h2>
            <p className="text-lg leading-relaxed">
              Welcome to your one-stop destination for a captivating theatrical experience! We are passionate about bringing the magic of different performances to life. Whether you're a seasoned theatergoer or a curious newcomer, we offer a diverse range of productions that will ignite your imagination and leave you breathless.
            </p>
            <p className="text-lg leading-relaxed">
              Our user-friendly online booking system makes it easier than ever to secure your seats for the shows you can't wait to see. Browse upcoming productions, explore seat options, and complete your purchase in just a few clicks. It's time to create unforgettable memories in the captivating world of theater!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
