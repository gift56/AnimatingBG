import React from "react";

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
        <div className="hidden md:flex items-center">
          <ul className="flex">
            {Links.map((item) => (
              <li key={item.id}>{item.link}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
