import React from "react";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-end mb-0 mt-20 w-full h-64 bg-[#3C4043]">
      <NavBar></NavBar>
      <div className="flex justify-center items-center h-full text-[#ADADAD]">
        <p className="flex justify-end items-end m-auto">
          Powered by <span className="text-white mx-1"> IdeaDrive</span> |
          Developed by
          <span className="text-white mx-1"> Bhathika</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
