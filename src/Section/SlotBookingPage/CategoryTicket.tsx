import { Grade } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { customColors } from "../../Theme";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { selectShows } from "../../Store/Slices/ShowSlice";

interface Show {
  type: string;
  price: string;
  times: string[];
}

interface Theater {
  id: number;
  name: string;
  location: string;
  brand: string;
  shows: Show[];
}

const brandColors: { [key: string]: string } = {
  CGV: customColors.CGVColor,
  Cinemapolis: customColors.cinepolisBlue,
  XXI: `linear-gradient(${customColors.xxiGradientStart}, ${customColors.xxiGradientEnd})`,
};

interface Show {
  type: string;
  price: string;
  times: string[];
}

interface Theater {
  name: string;
  location: string;
  brand: string;
  shows: Show[];
}

interface TheaterProps {
  theaters: Theater[];
}

const CGVTicket: React.FC<TheaterProps> = ({ theaters }) => {
  const selectedSlot = useSelector((state: RootState) => state.shows.showTimes);
  const dispatch = useDispatch();
  const now = dayjs();

  return (
    <Stack gap="24px">
      {theaters.map((theater) => {
        return (
          <Stack
            key={theater.id}
            gap="24px"
            sx={{ borderBottom: "1px solid #ddd", pb: 3 }}
          >
            <Stack gap="18px">
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{ bgcolor: "#1A2C50", width: "32px", height: "32px" }}
                >
                  <Grade sx={{ color: `${customColors.pastelYellow}` }} />
                </Avatar>
                <Typography
                  color="primary"
                  flex={1}
                  px="16px"
                  fontSize={{ lg: "24px", md: "22px", sm: "20px", xs: "18px" }}
                  fontWeight={600}
                >
                  {theater.name}
                </Typography>
                <Chip
                  label={theater.brand}
                  sx={{
                    background: brandColors[theater.brand],
                    color: "white",
                    borderRadius: "5px",
                    fontWeight: 500,
                  }}
                />
              </Box>
              <Typography variant="body1" color="#5A637A">
                {theater.location}
              </Typography>
            </Stack>

            <Stack gap="36px">
              {theater.shows.map((show, index) => (
                <Stack key={index} gap="16px">
                  <Box display="flex" alignItems="center">
                    <Typography variant="h4" color="#5A637A" flex={1}>
                      {show.type}
                    </Typography>
                    <Typography variant="subtitle1" color="#5A637A">
                      {show.price}
                    </Typography>
                  </Box>

                  <Grid container spacing={2} lg={6}>
                    {show.times.map((time, idx) => {
                      const showtime = dayjs()
                        .hour(Number(time.split(":")[0]))
                        .minute(Number(time.split(":")[1]));

                      const isPastTime = showtime.isBefore(now);
                      const isDisabled = idx < 2 || isPastTime;

                      return (
                        <Grid item lg={3} key={idx}>
                          <Button
                            variant={
                              selectedSlot === time ? "contained" : "text"
                            }
                            color="primary"
                            onClick={() => {
                              if (!isDisabled) {
                                dispatch(
                                  selectShows({
                                    time,
                                    type: show.type,
                                    price: show.price,
                                    theaterName: theater.name,
                                    location: theater.location,
                                  })
                                );
                              }
                            }}
                            sx={{
                              border:
                                selectedSlot === time
                                  ? "none"
                                  : "1px solid #9DA8BE",
                              bgcolor:
                                selectedSlot === time
                                  ? "primary.main"
                                  : "transparent",
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
              ))}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default CGVTicket;
