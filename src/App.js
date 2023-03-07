import React, { useState } from "react";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Footer from "./components/Footer/Footer";
import Login from "./containers/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Preference from "./components/Preferences/Preference";


const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Login hamActive={hamActive}/>
      <Dashboard hamActive={hamActive}/>
      <Preference hamActive={hamActive}/>
      <Footer hamActive={hamActive}/>
      
    </div>
  );
};

export default App;