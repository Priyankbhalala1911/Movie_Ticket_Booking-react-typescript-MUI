import {
  AccessTime,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Button, Grid, Menu } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { convertDurationToMinutes, generateShowtimes } from "../../Utils";

const ChooseTimeSlot: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const selectedSlot = useSelector((state: RootState) => state.shows.showTimes);

  const selectedTime = useSelector((state: RootState) => state.shows.showTimes);

  const ShowTime = generateShowtimes(
    selectedTime ?? "00:00",
    convertDurationToMinutes("2 hours")
  );

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        color="primary"
        startIcon={<AccessTime />}
        endIcon={<KeyboardArrowDown />}
        disableTouchRipple
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "24px",
          bgcolor: "transparent",
        }}
      >
        {selectedTime}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{ sx: { width: "410px", p: 1 } }}
      >
        <Button
          variant="text"
          color="primary"
          startIcon={<AccessTime />}
          endIcon={<KeyboardArrowUp />}
          disableTouchRipple
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "24px",
            bgcolor: "transparent",
          }}
        >
          {selectedTime}
        </Button>
        <Grid container spacing={2} lg={12}>
          {ShowTime.map((time, index) => {
            return (
              <Grid item lg={3} key={index}>
                <Button
                  variant={selectedSlot === time ? "contained" : "text"}
                  color="primary"
                  sx={{
                    border:
                      selectedSlot === time ? "none" : "1px solid #9DA8BE",
                    bgcolor:
                      selectedSlot === time ? "primary.main" : "transparent",
                    color: selectedSlot === time ? "white" : "black",
                    "&:hover": {
                      bgcolor: "#282764",
                      color: "white",
                    },
                    "&:disabled": {
                      color: "#9DA8BE",
                      border: "1px solid #ddd",
                      bgcolor: "#DADFE8",
                    },
                  }}
                >
                  {time}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Menu>
    </>
  );
};
export default ChooseTimeSlot;
