import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({sliceTitle}) => {
  return (
   <div className="flex gap-1 text-md md:text-xl">
             <NavLink to={"/"}>
               
               <h2>Home </h2>
             </NavLink>
             <span>/</span>
             <NavLink to={"/products"}>
               <h2>Products </h2>
             </NavLink>
             <span>/</span>
             <h2 className="text-blue-900 underline">{sliceTitle}</h2>
           </div>
  )
}

export default PageNavigation