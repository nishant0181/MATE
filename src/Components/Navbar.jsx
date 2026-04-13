import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Kbd } from "./ui/kbd";
import SearchDialog from "./SearchDialog";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className=" z-60 bg-black font-Inter sticky top-0 text-white flex justify-between p-4  max-w-360 mx-auto "
      >
        <Link
          to="/"
          className="text-2xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]"
        >
          MATE
        </Link>

        <div className="flex">
          <nav className="hidden md:block ">
            <ul className="flex  text-sm items-center justify-center ">
              <li className="px-4 py-2 rounded-xl cursor-pointer">
                <Link to="/dashboard">DashBoard</Link>
              </li>
              <li className="px-4 py-2 rounded-xl cursor-pointer">
                <Link to="/notes">Notes</Link>
              </li>
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">Tutorials</li> */}
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">Books</li> */}
              <li className="px-4 py-2 rounded-xl cursor-pointer">
                <Link to="/favorites">Favorites</Link>
              </li>
              <li className="px-4 py-2 rounded-xl cursor-pointer">PYQS</li>
              <li className="px-4 py-2 rounded-xl cursor-pointer">Upload</li>
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">GTU</li> */}
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">About US</li> */}
              <li></li>
            </ul>
          </nav>
          <InputGroup
            onClick={() => setIsOpen(true)}
            className="font-Figtree max-w-[200px]"
          >
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
           <div className="bg-[linear-gradient(0deg,transparent_0%,#09090b_97%)] w-full absolute top-16 z-20 h-16 md:h-28  "></div>
      </motion.header>
    </>
  );
}
