import { useState } from "react";
import "./App.css";
import Popup from "./Popup";
import Sandbox from "./Sandbox";

function App() {
  const [moonsteps, setMoonsteps] = useState([]);

  return (
    <>
      <Popup />
      <Sandbox />
    </>
  );
}

export default App;
