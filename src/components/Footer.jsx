import React from "react";
import { menu } from "../utils/footerData";

const Footer = () => {
  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-lg font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="my-12 text-center text-sm text-thBlue">
          © Copyright 2022 Anton LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
