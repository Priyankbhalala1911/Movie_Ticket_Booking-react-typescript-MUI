import { Grade } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { customColors } from "../../../Theme";
import dayjs from "dayjs";
import { useState } from "react";

interface MovieTime {
  showTime: string[];
}

const CGVTicket: React.FC<MovieTime> = ({ showTime }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(showTime[5]);
  const now = dayjs();

  return (
    <Stack gap="24px">
      <Stack gap="18px">
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: "#1A2C50", width: "32px", height: "32px" }}>
            <Grade sx={{ color: `${customColors.pastelYellow}` }} />
          </Avatar>
          <Typography variant="h4" color="primary" flex={1} px="16px">
            GRAND INDONESIA CGV
          </Typography>
          <Button color="secondary" variant="contained" size="small">
            CGV
          </Button>
        </Box>
        <Box component={Typography} variant="body1" color="#5A637A">
          JL. MH. TAHMRIN NO.1
        </Box>
      </Stack>
      <Stack gap="36px">
        <Stack gap="16px">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" color="#5A637A" flex={1}>
              REGULAR 2D
            </Typography>
            <Typography variant="subtitle1" color="#5A637A">
              Rp. 45,000 - 50,000
            </Typography>
          </Box>
          <Grid container spacing={2} lg={6}>
            {showTime.map((time, index) => {
              const showtime = dayjs()
                .hour(Number(time.split(":")[0]))
                .minute(Number(time.split(":")[1]));

              const isPastTime = showtime.isBefore(now);
              const isDisabled = index < 2 || isPastTime;
              return (
                <Grid item lg={3} key={index}>
                  <Button
                    variant={selectedSlot === time ? "contained" : "text"}
                    color="primary"
                    onClick={() => !isDisabled && setSelectedSlot(time)}
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
                    disabled={isDisabled}
                  >
                    {time}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
        <Stack gap="16px">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" color="#5A637A" flex={1}>
              GOLD CLASS 2D
            </Typography>
            <Typography variant="subtitle1" color="#5A637A">
              Rp. 100,000
            </Typography>
          </Box>
          <Grid container spacing={2} lg={6}>
            {showTime.map((time, index) => {
              const showtime = dayjs()
                .hour(Number(time.split(":")[0]))
                .minute(Number(time.split(":")[1]));

              const isPastTime = showtime.isBefore(now);
              const isDisabled = index < 2 || isPastTime;
              return (
                <Grid item lg={3} key={index}>
                  <Button
                    variant={selectedSlot === time ? "contained" : "text"}
                    color="primary"
                    onClick={() => !isDisabled && setSelectedSlot(time)}
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
                    disabled={isDisabled}
                  >
                    {time}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
        <Stack gap="16px">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" color="#5A637A" flex={1}>
              VELVET 2D
            </Typography>
            <Typography variant="subtitle1" color="#5A637A">
              Rp. 100,000
            </Typography>
          </Box>
          <Grid container spacing={2} lg={6}>
            {showTime.map((time, index) => {
              const showtime = dayjs()
                .hour(Number(time.split(":")[0]))
                .minute(Number(time.split(":")[1]));

              const isPastTime = showtime.isBefore(now);
              const isDisabled = index < 2 || isPastTime;
              return (
                <Grid item lg={3} key={index}>
                  <Button
                    variant={selectedSlot === time ? "contained" : "text"}
                    color="primary"
                    onClick={() => !isDisabled && setSelectedSlot(time)}
                    aria-pressed
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
                    disabled={isDisabled}
                  >
                    {time}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CGVTicket;
