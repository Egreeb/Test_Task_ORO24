import React from 'react'
import Login from './login'
import Logo from '../assets/images/logo.png'
const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: "url('/src/assets/images/bg.jpg')" }}
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Top centered logo (ABOVE overlay) */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 ">
          <img
            src={Logo}
            alt="Logo"
            className="w-36 h-auto"
          />
        </div><br />

        {/* Centered login box */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <Login />
        </div>
      </div>
    </>
  )
}

export default Home