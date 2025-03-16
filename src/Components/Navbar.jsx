import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
  return (
    <div className='p-3 flex justify-center items-center gap-15 text-2xl bg-green-300 text-white font-semibold'>
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
       <Link to='/courses'>Courses</Link>
    </div>
  )
}

export default Navbar