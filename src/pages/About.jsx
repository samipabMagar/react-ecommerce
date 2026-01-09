import React from 'react';
import TrustSection from '../components/TrustSection';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="">

      <div className="w-full relative h-80 md:h-96">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Office meeting"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl font-mono max-w-2xl">
            Building the future of e-commerce, one satisfied customer at a time.
          </p>
        </div>
      </div>


      <div className="container mx-auto px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
              Our Story
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-daraz-primary rounded"></span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-lg">
              Launched in 2025, Roka Store began with a simple mission: to provide high-quality products at accessible prices. What started as a small passion project has grown into a community-driven marketplace.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed text-lg">
              We believe in transparency, quality, and putting our customers first. Every item in our catalog is hand-picked and tested to ensure it meets our rigorous standards.
            </p>
            <div className='pt-4'>
              <NavLink to="/contact">
                <button className="bg-daraz-primary cursor-pointer text-white py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1 font-sans">
                  Get in Touch
                </button>
              </NavLink>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-daraz-accent/30 rounded-2xl transform rotate-3 -z-10"></div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Our Story"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>


      <div className="bg-white py-16">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
            <div className="p-4">
              <h3 className="text-4xl text-daraz-primary font-bold">10k+</h3>
              <p className="text-gray-500 mt-2 font-sans">Happy Customers</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl text-daraz-primary font-bold">5+</h3>
              <p className="text-gray-500 mt-2 font-sans">Years of Quality</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl text-daraz-primary font-bold">24/7</h3>
              <p className="text-gray-500 mt-2 font-sans">Support Available</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl text-daraz-primary font-bold">99%</h3>
              <p className="text-gray-500 mt-2 font-sans">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-50">
        <TrustSection />
      </div>
    </div>
  );
};

export default About;