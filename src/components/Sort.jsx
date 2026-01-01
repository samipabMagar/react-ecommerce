import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';


const Sort = () => {
    const [open , setOpen] = useState(false);
    const [selected, setSelected] = useState("Sort by");

    const handleSelect = (value) => {
        setSelected(value);
        setOpen(!open)
    }
  return (
    <>
    <div className='flex justify-between gap-2'>
          <input
            type="text"
            className="font-sans py-2 text-[12px] px-6 border border-gray-500 bg-white rounded-lg"
            placeholder="Search for products"
          />

          <div className="relative">
            <button onClick={() => setOpen(!open)} className="text-[10px] border-gray-500 flex justify-between items-center w-35  bg-white px-1 font-semibold  py-2 border rounded-lg">
              {selected} <MdArrowDropDown className='text-lg'/>
            </button>

           {
            open && (
                 <ul className="absolute bg-white shadow rounded mt-1 text-[10px]">
              <li onClick={() => handleSelect("Price (low → high)")} className="px-3 py-1 hover:bg-gray-100">
                Price (low → high)
              </li>
              <li onClick={() => handleSelect("Price (high → low)")} className="px-3 py-1 hover:bg-gray-100">
                Price (high → low)
              </li>
              <li onClick={() => handleSelect("Name (A-Z)")} className="px-3 py-1 hover:bg-gray-100">Name (A-Z)</li>
              <li onClick={() => handleSelect("Name (Z-A)")} className="px-3 py-1 hover:bg-gray-100">Name (Z-A)</li>
            </ul>
            )
           }
          </div>
        </div>
    </>
  )
}

export default Sort