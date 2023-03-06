import React, { useState } from "react";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      
    </div>
  );
};

export default App;