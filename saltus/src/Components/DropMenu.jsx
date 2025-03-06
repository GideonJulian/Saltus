import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/icons/SALTUS..png'
const DropMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-10 w-full h-[100dvh] bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
       <div className="logo">
              {/* <h1 className="font-bold ">SALTUS.</h1> */}
              <img src={logo} alt="" />
            </div>
        <button onClick={onClose} className="text-xl">
          ✖
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul className="flex flex-col space-y-4">
          {["Who Choose Us", "How it Works", "Contact Us"].map((item, index) => (
            <li
              key={index}
              className="w-full px-6 py-4 border-b border-gray-100 hover:bg-gray-100 transition-all"
            >
              <Link to="#" className="text-gray-800 font-medium text-lg block">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Button at the Bottom */}
      <div className="absolute inset-x-0 bottom-6 px-6">
        <button className="w-full py-3 bg-primary text-white font-semibold text-lg rounded-full shadow-md hover:bg-primary-dark transition-all">
          Join Our Waitlist
        </button>
      </div>
    </div>
  );
};

export default DropMenu;
