import './App.css';
import BannerMain from "./banner/bannerMain";
import MenuMain from "./menu/menuMain";
import React from "react";

function App() {
  return (
      <div className="App">
        <div className="App-banner">
          <BannerMain />
        </div>
        <div className="App-menu">
          <MenuMain />
        </div>
        <div className="App-main">
          这里是大致的框架!
        </div>
      </div>
  );
}

export default App;
