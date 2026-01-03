import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { useFilterProductContext } from '../context/FilterProductContext';


const Sort = () => {
    const [open , setOpen] = useState(false);
    const [selected, setSelected] = useState("Sort by");
    const{sortProducts, onSearchChange} = useFilterProductContext();

    const handleSelect = (value) => {
        setSelected(value);
        setOpen(!open)
        sortProducts(value)
    }

    
  return (
    <>
    <div className='flex justify-between gap-2 md:justify-evenly'>
          <input
            type="text"
            onChange={(e) => onSearchChange(e)}
            className="font-sans py-1 text-base md:px-10 md:w-2/5 md:border-2  pl-2 focus:outline-none border border-gray-500 bg-white rounded-lg"
            placeholder="Search for products"
          />

          <div className="relative">
            <button  onClick={() => setOpen(!open)} className="text-[12px] md:px-5 bg-daraz-dark text-white md:text-[17px] flex justify-between md:w-60 items-center w-35 md:border-2  bg-white px-1 font-semibold  py-2  rounded-lg">
              {selected} 
            <MdArrowDropDown className='text-base'/>
            </button>

           {
            open && (
                 <ul className="absolute md:w-50 md:text-[14px] md:px-2 bg-white shadow rounded z-10 mt-1 font-semibold text-[10px]">
              <li onClick={() => handleSelect("Price(low→high)")} className="px-3 py-2 hover:bg-gray-100">
                Price(low→high)
              </li>
              <li onClick={() => handleSelect("Price(high→low)")} className="px-3 py-2 hover:bg-gray-100">
                Price(high→low)
              </li>
              <li onClick={() => handleSelect("Name (A-Z)")} className="px-3 py-2 hover:bg-gray-100">Name (A-Z)</li>
              <li onClick={() => handleSelect("Name (Z-A)")} className="px-3 py-2 hover:bg-gray-100">Name (Z-A)</li>
            </ul>
            )
           }
          </div>
        </div>
    </>
  )
}

export default Sort