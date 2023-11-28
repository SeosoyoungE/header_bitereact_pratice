import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="header__logo">
          <a>LOGO</a>
        </div>
        <div className="header__nav">
          <div className="header__nav__item header__nav__item-bold">
            <a>HOME</a>
          </div>
          <div className="header__nav__item">
            <a>STYLE</a>
          </div>
          <div className="header__nav__item">
            <a>SHOP</a>
          </div>
          <div className="header__nav__item">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
