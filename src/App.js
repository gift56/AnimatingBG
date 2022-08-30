import React, { useState } from "react";
import DeveloperApi from "./components/DeveloperApi";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div>
      <Navbar menuShow={menuShow} setMenuShow={setMenuShow} />
      <Hero menuShow={menuShow} />
      <Products />
      <DeveloperApi />
    </div>
  );
};

export default App;
