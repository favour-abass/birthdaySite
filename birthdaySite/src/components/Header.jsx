import React from 'react'
import HeaderImg from '../assets/images/grandma1.jpeg'

const Header = () => {
  return (
    <header id="home" className="bg-linear-to-r from-rose-50 to-pink-50 py-16">
      <div className="max-w-7xl md:mx-10 sm:mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-rose-800 mb-4">
              Happy 80th Birthday, Grandma !
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Today we celebrate an extraordinary woman who has filled our lives with love, 
              wisdom, and countless precious memories. Your kindness and warmth have touched 
              so many hearts. Here's to you and all the joy you bring to our family!
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            {/* <div className="w-80 h-80 bg-linear-to-br from-rose-200 to-pink-300 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👵</div>
                <p className="text-rose-800 font-semibold">Grandma's Photo</p>
              </div>
            </div> */}
            <img className="w-96 h-96" src={HeaderImg} alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
