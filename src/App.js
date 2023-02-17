import './App.css';
import BannerMain from "./banner/bannerMain";
import MenuMain from "./menu/menuMain";
import Main from "./main/main"
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
          <Main />
        </div>
      </div>
  );
}

export default App;
