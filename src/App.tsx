import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
