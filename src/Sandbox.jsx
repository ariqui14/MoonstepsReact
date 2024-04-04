import { useState } from "react";
import "./Sandbox.css";
import { Box, Button, TextField, IconButton } from "@mui/material";

export default function Sandbox() {
  // Planet List Variables and Functions
  const [planetList, setPlanetList] = useState([]);
  const planets = 0;
  const addPlanet = (e) => {
    setPlanetList([...planetList, "a new planet"]);
  };

  return (
    <>
      <Box sx={{ p: 2, border: "1px dashed grey" }}>
        <h3>Sandbox</h3>
        <p onClick={addPlanet}>I have {planetList.length} planets.</p>
      </Box>
    </>
  );
}
