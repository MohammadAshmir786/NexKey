import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="container md:px-40 mx-auto px-4">
        <div className="flex justify-between items-center h-14 px-4">
          <div className="logo font-bold text-2xl">
            <Logo />
          </div>

          <button className="text-white bg-green-700 rounded-full flex items-center ring-white ring-1">
            <img
              className="invert p-1 w-8 md:w-10"
              src="/icons/github.svg"
              alt="github logo"
            />
            <span className="font-bold px-1 md:px-2">GitHub</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
