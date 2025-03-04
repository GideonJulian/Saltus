import React from "react";
import { Link } from "react-router-dom";

const DropMenu = ({ isOpen, onClose }) => {
  return (
    <>
   
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

 
      <div
        className={`fixed top-0  b-0 z-10 left-0 w-full h-[100vh] bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-primary">SALTUS.</h1>
          <button onClick={onClose} className="font-normal text-lg">
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="flex flex-col space-y-4">
            {["Who Choose Us", "How it Works", "Contact Us"].map((item, index) => (
              <li key={index} className="w-full px-6 py-4 border-b border-gray-100 hover:bg-gray-100 transition-all">
                <Link to="#" className="text-gray-800 font-medium text-lg block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-10 left-0 w-full px-6">
          <button className="w-full py-3 bg-primary text-white font-semibold text-lg rounded-full shadow-md hover:bg-primary-dark transition-all">
            Join Our Waitlist
          </button>
        </div>
      </div>
    </>
  );
};

export default DropMenu;
