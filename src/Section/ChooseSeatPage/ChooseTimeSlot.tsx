import {
  AccessTime,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Button, Grid, Menu } from "@mui/material";
import React, { useState } from "react";

const ChooseTimeSlot: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

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
        14:40
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
          14:40
        </Button>
        <Grid container spacing={2} lg={12}>
          {[...Array(8)].map((_, index) => {
            return (
              <Grid item lg={3} key={index}>
                <Button
                  variant={selectedSlot === _ ? "contained" : "text"}
                  color="primary"
                  aria-pressed
                  sx={{
                    border: selectedSlot === _ ? "none" : "1px solid #9DA8BE",
                    bgcolor:
                      selectedSlot === _ ? "primary.main" : "transparent",
                    color: selectedSlot === _ ? "white" : "black",
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
                  14:40
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
