import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(false)
  return (
    <>
      <nav className="pt-3 pb-2 md:pt-5 px-5 flex justify-between items-center sticky top-0 z-30   text-zinc-100 md:px-15 bg-daraz-primary">
        <NavLink to={'/'}><h2 className="font-devina   font-extrabold text-2xl md:text-3xl  leading-4">
          Roka <br />
          <span className="text-lg">Store</span>
        </h2></NavLink>
        <ul className="flex hidden md:flex gap-15  cursor-pointer md:text-xl  font-semibold">
         <NavLink to={'/'}> <li className="hover:text-zinc-300 transition-all duration-300">
            Home
          </li></NavLink>
          <NavLink to={'/products'}><li className="hover:text-zinc-300 transition-all duration-300">
            Product
          </li></NavLink>
         <NavLink to={'/about'}> <li className="hover:text-zinc-300 transition-all duration-300">
            About
          </li></NavLink>
          <NavLink to={'/contact'}><li className="hover:text-zinc-300 transition-all duration-300">
            Contact
          </li></NavLink>
        </ul>
        <div className="flex gap-5 text-2xl items-center">
          <FaCartShopping className="hidden md:block" />
          <span>
            <BiUser className="hidden md:block" />
          </span>
          <button className="md:hidden" onClick={()=> setMenuOpen(!menuOpen)}>{menuOpen ? <HiX/>: <HiMenu className="text-4xl" />}</button>
        </div>
       
      </nav>
      {menuOpen && (
        
             <ul className="flex px-5  w-full z-30 flex-col gap-4 bg-daraz-primary  top-15 fixed  text-white py-4 text-2xl pb-10  cursor-pointer md:text-lg  font-semibold">
          <NavLink to={'/'}><li onClick={handleClick} className="hover:text-zinc-300 transition-all duration-300">
            Home
          </li></NavLink>
         <NavLink to={'/products'}> <li onClick={handleClick} className="hover:text-zinc-300 transition-all duration-300">
            Product
          </li></NavLink>
         <NavLink to={'/about'}> <li onClick={handleClick} className="hover:text-zinc-300 transition-all duration-300">
            About
          </li></NavLink>
          <NavLink to={'/contact'}><li onClick={handleClick} className="hover:text-zinc-300 transition-all duration-300">
            Contact
          </li></NavLink>
        </ul>
        
       )}
    </>
  );
};

export default Header;
