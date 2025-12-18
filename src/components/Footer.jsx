import React from 'react'
import { BiLocationPlus, BiPhone } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'

const Footer = () => {
  return (
    <footer className=' bg-daraz-dark gap-4  w-full pt-3 pb-2 md:pt-5 px-5 grid  text-zinc-100 md:px-15 '>
      <div className='flex flex-col md:flex-row space-y-4 md:justify-between'>
         <div>
        <h2 className="font-devina   font-extrabold text-2xl md:text-3xl  leading-4">
          Roka <br />
          <span className="text-lg">Store</span>
        </h2>
        <p>Your trusted online shopping destination.</p>
       </div>
       <div>
        <h1 className='font-semibold text-lg'>Quick Links</h1>
        <ul className=''>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
        <div>
          <h1 className='font-semibold text-lg'>Categories</h1>
          <ul className=''>
            <li>Electronics</li>
            <li>Men</li>
            <li>Women</li>
            <li>Jewelry</li>
          </ul>
        </div>
        <div>
          <h3 className='flex items-center gap-2'><CgMail className='text-gray-400 text-xl '/>rokastore@gmail.com</h3>
          <h3 className='flex items-center gap-2'><BiPhone className='text-gray-400 text-xl'/> 9887898789</h3>
          <h3 className='flex items-center gap-2 '>
            <BiLocationPlus className='text-gray-400 text-xl'/>
            Gandaki, Baglung
          </h3>

        </div>
      </div>
        <div className=''>
          <hr className='text-zinc-300' />
        <span className='mt-2 block text-center'>&copy; 2025 Roka Store. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer