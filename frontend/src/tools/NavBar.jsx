import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  //use route to get the current path
  const location = useLocation();
  const currentPath = location.pathname;
  //set active class to the current path
  const handleActiveClass = (path) => {
    if (currentPath === path) {
      return "active bg-gradient-to-l ease-in-out  transition hover:text-black from-blue-500 via-pink-500 to-purple-500 duration-300";
    } else {
      return "px-3 py-2 rounded-full  deactive";
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="nav-background flex rounded-full justify-between items-center bg-white shadow-xl !shadow-gray-900 w-fit h-16 mt-8">
        <ul className="flex gap-11 mx-5 nav-menu font-black">
          <Link to="/">
            <li className={handleActiveClass("/")}>Home</li>
          </Link>
          <Link to="/ai-doctor">
            <li className={handleActiveClass("/ai-doctor")}>AI-Chat</li>
          </Link>
          <Link to="/dr-ranking">
            <li className={handleActiveClass("/dr-ranking")}>Ranking</li>
          </Link>
          <li className="px-3 py-2 rounded-full deactive">Select</li>
          <li className="px-3 py-2 rounded-full deactive">Doctor</li>
          <li className="px-3 py-2 rounded-full deactive">About</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
