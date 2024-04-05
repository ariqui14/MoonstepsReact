import { useState } from "react";
import { Box, Button, TextField, IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { styled } from "@mui/system";
import "./Popup.css";
import { CurrentMoonstepList, randomObjFromArray } from "./MoonstepFunctions";

export default function Popup() {
  const [count, setCount] = useState(0);

  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [placeholder, setPlaceholder] = useState("Placeholder");
  const [currentMoonsteps, setCurrentMoonsteps] = useState(CurrentMoonstepList);
  const [newMoonstep, setNewMoonstep] = useState("");

  const handlePopup = (e) => {
    setTrueOrFalse(true);

    setPlaceholder(CurrentMoonstepList);
    console.log(CurrentMoonstepList());
  };
  const open = Boolean(trueOrFalse);
  const id = open ? "simple-popup" : undefined;
  const handleClickAway = () => {
    setTrueOrFalse(false);
  };

  const addMoonstep = () => {};

  return (
    <>
      <Box className="main">
        <Button onClick={handlePopup}>Add Moonstep</Button>
        <div>
          <BasePopup id={id} open={open} anchor={trueOrFalse}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="moonstepPopup">
                {trueOrFalse ? (
                  <TextField
                    id="filled-textarea"
                    label="Add today's Moonstep"
                    placeholder={randomObjFromArray(currentMoonsteps)}
                    multiline
                    variant="filled"
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={addMoonstep}>
                          <AutoAwesomeIcon />
                        </IconButton>
                      ),
                    }}
                    sx={{ width: "225px" }}
                  />
                ) : null}
              </div>
            </ClickAwayListener>
          </BasePopup>
        </div>
      </Box>
    </>
  );
}
