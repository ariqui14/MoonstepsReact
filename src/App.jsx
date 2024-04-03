import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [moonsteps, setMoonsteps] = useState([]);

  return (
    <>
      <Popup />
    </>
  );
}

export default App;
