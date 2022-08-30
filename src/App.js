import React, { useState } from "react";
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
    </div>
  );
};

export default App;
