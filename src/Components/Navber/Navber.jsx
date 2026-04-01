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
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Testimonial</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <img src={cartImg}alt=""  /> 
        <a href="">login</a>
        <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-xl text-white">Get Started</a>
      </div>
    </div>
  )
}

export default Navber;