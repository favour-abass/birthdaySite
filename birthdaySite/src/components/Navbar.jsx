import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { MdCake } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="bg-rose-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-5 md:mx-10 sm:mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-rose-800 flex">
            <FaBirthdayCake className="me-2" /> Grandma's Special Day
          </h1>
          <div className="flex gap-6 text-sm sm:text-base">
            <a
              href="#home"
              className="text-rose-700 hover:text-rose-900 transition"
            >
              Home
            </a>
            <a
              href="#messages"
              className="text-rose-700 hover:text-rose-900 transition"
            >
              Messages
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
