import React, { useState } from "react";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import DeveloperApi from "./components/DeveloperApi";
import Footer from "./components/Footer";
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
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
