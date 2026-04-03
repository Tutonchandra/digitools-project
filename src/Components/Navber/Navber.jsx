import React from 'react'
import cartImg from '../../assets/products/shopping-cart.png'
import Cart from '../Models/Cart'
function Navber() {
  return (
    <div className="navbar container mx-auto h-20 content-center justify-center">
      <div className="navbar-start ">
        <h2 className='text-4xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent '> DigiTools</h2>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal cursor-pointer text-purple-500 flex gap-10 px-1 text-lg">
          <li className='  hover:text-purple-800 hover:transition-colors p-2 rounded full'>
            <a href="#">Home</a>
          </li>
          <li className='  hover:text-purple-800 hover:transition-colors p-2 rounded full'>
            <a href="#">About</a>
          </li>
          <li className='  hover:text-purple-800 hover:transition-colors p-2 rounded full'>
            <a href="#">Pricing</a>
          </li>
          <li className='  hover:text-purple-800 hover:transition-colors p-2 rounded full'>
            <a href="#">Features</a>
          </li>
          <li className='  hover:text-purple-800 hover:transition-colors p-2 rounded full'>
            <a href="#">Products</a>
          </li>
          <li className='  hover:text-purple-800 hover:transition-colors p-2 rounded full'>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <img className='' src={cartImg} alt="w-10 h-10" />
        <a className='text-2xl' href="">login</a>
        <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-xl text-white">Get Started</a>
      </div>
    </div>
  )
}

export default Navber;