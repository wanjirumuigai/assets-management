import React, { createContext, useState } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import View from "./View";

import OneAsset from "./OneAsset";
import AssetAdd from "./AssetAdd";
import AssetList from "./AssetList";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/addnew" element={<AssetAdd />} />
          <Route path="/assets" element={<AssetList />} />
          <Route path="/assets/:id" element={<OneAsset />} />

          {/* <Route path="/edit" element={<Edit />} /> */}
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
