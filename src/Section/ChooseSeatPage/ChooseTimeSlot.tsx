import { AccessTime } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

// interface Time {
//   id: string;
//   Time: string;
//   Price: number;
// }
// interface ShowTime {
//   showTime: Time[];
// }

const ChooseTimeSlot: React.FC = () => {
  const selectedSlot = useSelector((state: RootState) => state.shows.showTimes);

  return (
    <>
      <Button
        variant="text"
        color="primary"
        startIcon={<AccessTime />}
        disableTouchRipple
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "24px",
          bgcolor: "transparent",
        }}
      >
        {selectedSlot}
      </Button>

      {/* <Menu
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
          {selectedSlot}
        </Button>
        <Grid container spacing={2} lg={12}>
          {Array.isArray(showTime) && showTime.length > 0 ? (
            showTime?.map((time, index) => {
              const showtime = dayjs()
                .hour(Number(time.Time.split(":")[0]))
                .minute(Number(time.Time.split(":")[1]));

              const isPastTime = showtime.isBefore(now);
              console.log(time);
              return (
                <Grid item lg={3} key={index}>
                  <Button
                    variant={selectedSlot === time.Time ? "contained" : "text"}
                    onClick={() => dispatch(selectTime(time.Time))}
                    color="primary"
                    sx={{
                      display: !isPastTime ? "block" : "none",
                      border:
                        selectedSlot === time.Time
                          ? "none"
                          : "1px solid #9DA8BE",
                      bgcolor:
                        selectedSlot === time.Time
                          ? "primary.main"
                          : "transparent",
                      color: selectedSlot === time.Time ? "white" : "black",
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
                    {time.Time}
                  </Button>
                </Grid>
              );
            })
          ) : (
            <p>No available showtimes</p>
          )}
        </Grid>
      </Menu> */}
    </>
  );
};
export default ChooseTimeSlot;
