import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="h-140 w-full relative  ">
        <img
          className="md:h-140 h-100 w-full  object-cover "
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40 z-10 "></div>
        <div className="absolute w-75 mx-auto md:w-200 inset-0 flex flex-col items-center gap-8 md:px-15 px-5  text-white   font-semibold font-serif top-20  md:top-40 z-20">
            <h1 className="text-2xl md:text-5xl text-center">Everything You Need, In One Place</h1>
            <p className=" text-center text-sm md:text-xl">Discover high-quality products at competitive prices with a seamless and secure online shopping experience you can trust.</p>
            <NavLink to={'/products'}><button className="bg-daraz-primary py-2 px-5 hover:scale-105   cursor-pointer rounded-xl border-transparent border-0">Shop Now</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
