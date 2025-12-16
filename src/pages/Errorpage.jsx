import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>page not found! Back to <NavLink to={'/'}><span className='text-blue-500'>home</span></NavLink></div>
  )
}

export default Errorpage