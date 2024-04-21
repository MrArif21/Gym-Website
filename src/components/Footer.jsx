import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const newDate = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#222] mt-5 rounded-t-3xl py-8">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <Link to="/">
            <h1 className="font-semibold text-2xl text-brightRed">
            Suplex Gym
            </h1>
          </Link>
          <p className="mt-4">
          Unleash Your Potential at Chandigarh's Ultimate Fitness Haven for Both Men and Women
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Address</h1>
          <p className="mt-4">
          2104, 1st floor, Pipliwala Town, Adarsh Nagar, Sector 13, Chandigarh, 160101
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Business Hours</h1>
          <ul className="mt-4">
            <li>Mon-Sat: 7:00 AM – 12:00 AM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed ">Contact</h1>
          <div className="flex flex-row items-center mt-4">
            <AiTwotonePhone size={20} />
            <p className="ml-2">+919956874563</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <AiOutlineMail size={20} color="red" />
            <p className="ml-2">Suplex.infoGym@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center">
          © <span className="text-brightRed">Suplex Gym</span> | {newDate}
        </p>
      </div>
    </div>
  );
};

export default Footer;
