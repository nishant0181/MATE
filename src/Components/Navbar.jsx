import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className=" z-60 bg-black font-Inter sticky top-0 text-white flex justify-between p-4  max-w-360 mx-auto "
      >
        {/* <a href="/" className="flex items-center">
          <div className="logo-wrapper">
            <span className="MATE">MATE</span>
            <span className="X">X</span>
          </div>
        </a> */}
        {/* <a className="cursor-pointer text-xl " href="http://">
          M A T E X
        </a> */}

        <Link
          to="/"
          className="text-2xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]"
        >
          MATE
        </Link>

        <div className="block md:hidden">☰</div>

        <nav className="hidden md:block ">
          <ul className="flex  text-sm ">
            <li className="px-4 py-2 rounded-xl cursor-pointer">
              <Link to="/dashboard">DashBoard</Link>
            </li>
            <li className="px-4 py-2 rounded-xl cursor-pointer">
              <Link to="/notes">Notes</Link>
            </li>
            {/* <li className="px-4 py-2 rounded-xl cursor-pointer">Tutorials</li> */}
            {/* <li className="px-4 py-2 rounded-xl cursor-pointer">Books</li> */}
            <li className="px-4 py-2 rounded-xl cursor-pointer">PYQS</li>
            <li className="px-4 py-2 rounded-xl cursor-pointer">Upload</li>
            {/* <li className="px-4 py-2 rounded-xl cursor-pointer">GTU</li> */}
            {/* <li className="px-4 py-2 rounded-xl cursor-pointer">About US</li> */}
            <li></li>
          </ul>
        </nav>
      </motion.header>
    </>
  );
}
