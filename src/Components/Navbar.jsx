import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { MoonIcon, SearchIcon, SunIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Kbd } from "./ui/kbd";
import SearchDialog from "./SearchDialog";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeGiver";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="overflow-hidden z-40 bg-background text-black  font-Inter sticky top-0 dark:text-white flex justify-between p-4  max-w-360 mx-auto select-none "
      >
        <Link
          to="/"
          className="text-2xl font-Inter font-medium tracking-[3.5px] text-black dark:text-[#f4efe6]"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          MATE
        </Link>

        <div className="flex items-center gap-2">
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
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">
                <Link to="/upload">Upload</Link>
              </li> */}
              <li className="px-4 py-2 rounded-xl cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">GTU</li> */}
              {/* <li className="px-4 py-2 rounded-xl cursor-pointer">About US</li> */}
              <li></li>
            </ul>
          </nav>
          <InputGroup
            onClick={() => setIsOpen(true)}
            className="font-Figtree max-w-[120px] md:max-w-[200px] "
          >
            <InputGroupInput placeholder="Search..." className="cursor-pointer md:text-sm text-xs" />
            <InputGroupAddon>
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <Button className="cursor-pointer" variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
        <SearchDialog  isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="
        bg-[linear-gradient(0deg,transparent_0%,#ffffff_97%)]
         dark:bg-[linear-gradient(0deg,transparent_0%,oklch(0.227_0_281.65)_97%)] w-full fixed top-14 h-16 md:h-18 pointer-events-none "></div>

      </motion.header>
    </>
  );
}
