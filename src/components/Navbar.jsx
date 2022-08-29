import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

const Navbar = () => {
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "developer api",
    },
    {
      id: 4,
      link: "customers",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="absolute w-full h-24 bg-black text-white z-20">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <div>
          <h1 className="text-thBlue tracking-widest text-3xl">ANTON</h1>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex">
            {Links.map(({ id, link }) => (
              <li
                key={id}
                className="uppercase duration-200 hover:text-thBlue cursor-pointer lg:p-2 xl:p-4"
              >
                {link}
              </li>
            ))}
          </ul>
          <GradientBtn title="get anton" className="ml-4 capitalize" />
        </div>
        <div className="block lg:hidden">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
