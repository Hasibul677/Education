import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-900 bg-indigo-300 body-font fixed w-full relative">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to='/home' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="./images/headerLogo/logo.png" alt="company logo" />
        </NavLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center justify-center font-bold text-xl">
          <NavLink to='/home' className="mr-5">Home</NavLink>
          <NavLink to='/service' className="mr-5">Service</NavLink>
          <NavLink to='/about' className="mr-5">About</NavLink>
          <NavLink to='/contact' className="mr-5">Contact</NavLink>
        </nav>
        <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Sign <i className="mx-2 fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
