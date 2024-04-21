// Importing necessary modules and components
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

// Defining the menu items
const menuItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About Us" },
  { id: "plans", name: "Pricing Plans" },
  { id: "trainers", name: "Trainers" },
  { id: "contact", name: "Contact Us" },
];

// Navbar component
const Navbar = () => {
  // State variables for menu and sticky navbar
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Function to toggle the menu
  const handleChange = () => {
    setMenu(!menu);
  };

  // Function to handle scroll events and set sticky navbar
  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  // Effect hook to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Rendering the Navbar component
  return (
    <div>
      <div
        className={`md:fixed ${
          isSticky ? "bg-black bg-opacity-80" : ""
        } flex flex-row justify-between md:px-32 px-5 p-5 gap-16 w-full`}
      >
        <div className="flex items-center p-2">
          <Link to="/">
            <h1 className="font-semibold text-2xl text-brightRed">
              Suplex Gym
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center p-2 gap-5">
          {/* Mapping through menu items and creating Link components */}
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightRed transition-all cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>

      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        {/* Mapping through menu items and creating Link components */}
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightRed transition-all cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;