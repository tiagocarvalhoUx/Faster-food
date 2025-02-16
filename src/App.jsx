import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Menu from "./components/Menu";
import Dishes from "./components/Dishes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <main>
        <div id="home">
          <Home />
        </div>
        
        <div id="dishes">
        <Dishes />
        </div>
      </main>
    </div>
  );
};

export default App;
