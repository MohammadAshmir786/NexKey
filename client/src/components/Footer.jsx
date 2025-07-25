import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white flex flex-col justify-center items-center">
      <div className="logo font-bold text-2xl">
        <Logo />
      </div>
      <div className="flex justify-center items-center">
        Created with <img src="/icons/heart.png" alt="Love" className="w-7 mx-2"/> by&nbsp;
        <a href="https://MohammadAshmir786.github.io/Devfolio/" target="_blank" rel="noopener noreferrer">
          Dev.Ashmir
        </a>
      </div>
    </footer>
  );
};

export default Footer;
