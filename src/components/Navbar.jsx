import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import { Link } from "react-scroll";

const Navbar = ({ menuShow, setMenuShow }) => {
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
      link: "developer API",
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
    <>
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
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <GradientBtn title="get anton" className="ml-4 capitalize" />
          </div>
          <div
            onClick={() => setMenuShow((prev) => !prev)}
            className="block lg:hidden"
          >
            {menuShow ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-black text-white absolute z-10 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          menuShow ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className={`${id === 1 ? "" : "mt-4"} uppercase`}
              onClick={() => setMenuShow((prev) => !prev)}
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <GradientBtn title="get anton" className="mt-10 capitalize" />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
