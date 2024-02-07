import React, { useState } from "react";
import { logo2 } from "../assets";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../constants";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <nav className="fixed w-full flex justify-around items-center p-6 bg-gradient-to-r from-pink-200 via-orange-300 to-red-400 sm:h-[95px] h-[70px] z-10">
      <div className="h-[80px] w-[80px] mix-blend-multiply ml-4">
        <img src={logo2} alt="logo" className="w-full" />
      </div>
      <ul className="list-none sm:flex hidden justify-end flex-1 items-center">
        {NavLinks.map((link, index) => (
          <li
            key={link.id}
            className="cursor-pointer text-[30px] text-primary mr-10 navLink"
          >
            <NavLink
              to={`${link.to}`}
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
        {/* <li>
          <button className="px-6 py-2 text-[20px] bg-red-500 border-white border-2  text-white rounded-[6px] hover:shadow-lg hover:shadow-dimWhite hover:duration-1000">
            Profile
          </button>
        </li> */}
      </ul>
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <div
          className="h-[100px] w-[100px] flex items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          {isOpen ? (
            <FiMenu className="h-[40px] w-[40px] " />
          ) : (
            <IoMdClose className="h-[40px] w-[40px] " />
          )}
        </div>
        <ul
          className={`list-none ${
            isOpen ? "hidden" : "flex"
          } flex-col justify-end items-end flex-1 absolute p-6 right-0 top-[70px] w-full bg-gradient-to-b from-pink-300 to-orange-300`}
        >
          {NavLinks.map((link, index) => (
            <li
              key={link.id}
              className="cursor-pointer text-[18px] text-primary mb-6 navLink mr-10"
              onClick={()=>{setOpen(false)}}
            >
              <NavLink
                to={`${link.to}`}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          {/* <li>
            <button className="px-6 py-2 mr-10 text-[20px] bg-red-500 border-white border-2  text-white rounded-[6px] hover:shadow-lg hover:shadow-dimWhite hover:duration-1000">
              Profile
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
