import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-indigo-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-4xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9 items-center">
        <li className="cursor-pointer hover:font-bold transition-all text-xl">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all text-xl">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
