import React, { useState } from 'react'
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { FaStar, FaRegUser, FaCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/images/logo.png'

const Header = () => {
const navigate = useNavigate()
const  handleLogout = ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
}
    const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="ORO Facilities" className="h-8" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="#" className="hover:text-gray-300 transition">Home</Link>
            <Link href="#" className="hover:text-gray-300 transition">Packages</Link>
            <Link href="#" className="hover:text-gray-300 transition">Our Services</Link>
            <Link href="#" className="hover:text-gray-300 transition">Contact Us</Link>

            <button className="rounded-full px-6 py-1 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold">EXPRESS</button>
            {/* Language */}
            <div className="flex items-center space-x-1">
              <span className="text-xs">EN</span>
            </div>


            {/* Icons */}
            <Search className="w-4 h-4 cursor-pointer hover:text-gray-300" />


            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">2</span>
            </div>
            <button onClick={handleLogout} className="flex items-center space-x-1 hover:text-gray-300">
              <span>Logout</span>
              <FaRegUser className="text-white text-md" />
            </button>
          </nav>


          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-neutral-900 px-4 pb-4 space-y-4 text-sm">
            <Link href="#" className="block py-1 border-b border-neutral-700">Home</Link>
            <Link href="#" className="block py-1 border-b border-neutral-700">Packages</Link>
            <Link href="#" className="block py-1 border-b border-neutral-700">Our Services</Link>
            <Link href="#" className="block py-1 border-b border-neutral-700">Contact Us</Link>


            <div className="flex items-center space-x-2 pt-2">
              <Search className="w-5 h-5" />
              <ShoppingCart className="w-5 h-5" />
              <button onClick={handleLogout}>
                <span className="ml-auto">Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header