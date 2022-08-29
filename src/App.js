import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div>
      <Navbar menuShow={menuShow} setMenuShow={setMenuShow} />
    </div>
  );
};

export default App;
