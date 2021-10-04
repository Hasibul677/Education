import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-indigo-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <NavLink to='/home' className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <span className='text-2xl font-bold'>EDUCAL</span>
        </NavLink>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2021 cipywright @Hasibul Hasan
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <NavLink to='' className="text-gray-400">
          <i className="fa-2x fab fa-facebook"></i>
          </NavLink>
          <NavLink to='' className="ml-3 text-gray-400">
          <i className="fa-2x fab fa-twitter"></i>
          </NavLink>
          <NavLink to='' className="ml-3 text-gray-400">
          <i className="fa-2x fab fa-instagram-square"></i>
          </NavLink>
          <NavLink to='' className="ml-3 text-gray-400">
          <i className="fa-2x fab fa-linkedin-in"></i>
          </NavLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
