import { useState, useEffect } from "react";
import "./Sandbox.css";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import { planetList, initialPlanetState, erasList } from "./Planet";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { randomObjFromArray } from "./MoonstepFunctions";

export default function Sandbox() {
  // Planet List Variables and Functions
  const [planets, setPlanetList] = useState(planetList);
  const [planetName, setPlanetName] = useState();
  const [newPlanet, setNewPlanet] = useState();
  const [openAddPlanetDialog, setOpenAddPlanetDialog] = useState(false);

  const addPlanetConfirmed = (e) => {
    const newPlanetObject = {
      Name: planetName,
      Moons: 0,
      Era: erasList[0],
    };

    setPlanetList((prevPlanetList) => [...prevPlanetList, newPlanetObject]);
    setOpenAddPlanetDialog(false);
  };

  const nextEra = (index) => {
    setPlanetList((prevPlanets) => {
      return prevPlanets.map((planet, i) => {
        if (i === index) {
          const currentEraIndex = erasList.indexOf(planet.Era);
          let nextEraIndex;

          if (currentEraIndex === erasList.length - 1) {
            // If the current era is the last Futuristic era, stay in the same era
            nextEraIndex = currentEraIndex;
          } else {
            // Otherwise, increment to the next era
            nextEraIndex = currentEraIndex + 1;
          }

          const nextEra = erasList[nextEraIndex];
          return { ...planet, Era: nextEra };
        }
        return planet;
      });
    });
  };

  const addMoon = (index) => {
    setPlanetList((prevPlanets) => {
      return prevPlanets.map((planet, i) => {
        if (i === index) {
          return { ...planet, Moons: planet.Moons + 1 };
        }
        return planet;
      });
    });
  };

  return (
    <>
      <Box sx={{ p: 2, border: "1px dashed grey" }}>
        <h3>Sandbox</h3>
        <p onClick={() => setOpenAddPlanetDialog(true)}>
          I have {planets.length} planets.
        </p>

        <p>My Planets</p>
        <div>
          {planets.map((planet, index) => (
            <div key={index}>
              Planet {planet.Name}, Moons: {planet.Moons}, Era: {planet.Era}
              <Button onClick={() => addMoon(index)}>Add Moon</Button>
              <Button onClick={() => nextEra(index)}>Next Era</Button>
            </div>
          ))}
        </div>
        <Dialog
          open={openAddPlanetDialog}
          onClose={() => setOpenAddPlanetDialog(false)}
        >
          <DialogTitle>Name your new Planet</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="Name"
              name="planet"
              value={planetName}
              onChange={(e) => setPlanetName(e.target.value)}
              label="Planet Name"
              type="Planet Name"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAddPlanetDialog(false)}>
              Cancel
            </Button>
            <Button onClick={addPlanetConfirmed}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
