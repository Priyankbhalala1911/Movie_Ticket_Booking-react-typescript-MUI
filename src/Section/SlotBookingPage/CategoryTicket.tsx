import { Grade } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Chip,
  Skeleton,
} from "@mui/material";
import { customColors } from "../../Theme";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { selectShows } from "../../Store/Slices/ShowSlice";

const brandColors: { [key: string]: string } = {
  CGV: customColors.CGVColor,
  Cinepolis: customColors.cinepolisBlue,
  INOX: `linear-gradient(${customColors.xxiGradientStart}, ${customColors.xxiGradientEnd})`,
  PVR: `linear-gradient(${customColors.pastelYellow},${customColors.CGVColor}, ${customColors.cinepolisBlue})`,
};

interface Screens {
  type: string;
  price: string;
  slots: string[];
}

interface Theater {
  name: string;
  location: string;
  chain: string;
  screens: Screens[];
}

interface TheaterProps {
  theaters: Theater[];
  loading: boolean;
}

const CGVTicket: React.FC<TheaterProps> = ({ theaters = [], loading }) => {
  const selectedSlot = useSelector((state: RootState) => state.shows.showTimes);
  const selectedDate = useSelector(
    (state: RootState) => state.movies.selectedDate
  );
  const dispatch = useDispatch();
  const now = dayjs();

  return (
    <Stack gap="24px">
      {(loading ? Array.from(new Array(2)) : theaters).map((theater, index) => {
        return (
          <Stack
            key={index}
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
                {loading ? (
                  <Skeleton
                    width="20%"
                    height={30}
                    variant="text"
                    animation="wave"
                    sx={{ flex: 1 }}
                  />
                ) : (
                  <Typography
                    color="primary"
                    flex={1}
                    px="16px"
                    fontSize={{
                      lg: "24px",
                      md: "22px",
                      sm: "20px",
                      xs: "18px",
                    }}
                    fontWeight={600}
                  >
                    {theater.name}
                  </Typography>
                )}
                {loading ? (
                  <Skeleton width={60} height={30} variant="rectangular" />
                ) : (
                  <Chip
                    label={theater?.chain}
                    sx={{
                      background: brandColors[theater.chain],
                      color: "white",
                      borderRadius: "5px",
                      fontWeight: 500,
                    }}
                  />
                )}
              </Box>
              <Typography variant="body1" color="#5A637A">
                {theater?.location}
              </Typography>
            </Stack>

            <Stack gap="36px">
              {(loading ? Array.from(new Array(2)) : theater.screens)?.map(
                (show: any, index: number) => (
                  <Stack key={index} gap="16px">
                    <Box display="flex" alignItems="center">
                      {loading ? (
                        <Skeleton width="40%" height={31} sx={{ flex: 1 }} />
                      ) : (
                        <Typography variant="h4" color="#5A637A" flex={1}>
                          {show.type}
                        </Typography>
                      )}
                      {loading ? (
                        <Skeleton width="20%" height={31} />
                      ) : (
                        <Typography variant="subtitle1" color="#5A637A">
                          {Number(show.price).toFixed(2)}
                        </Typography>
                      )}
                    </Box>

                    <Grid container spacing={2} lg={6}>
                      {(loading ? Array.from(new Array(4)) : show.slots).map(
                        (time: any, idx: number) => {
                          if (loading) {
                            return (
                              <Grid item lg={3} key={idx}>
                                <Skeleton width="100%" height={36} />
                              </Grid>
                            );
                          }
                          const showtime = dayjs()
                            .hour(Number(time.split(":")[0]))
                            .minute(Number(time.split(":")[1]));

                          const isPastTime = showtime.isBefore(now);
                          const isDisabled = isPastTime;

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
                                        date: selectedDate,
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
                                  color:
                                    selectedSlot === time ? "white" : "black",
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
                        }
                      )}
                    </Grid>
                  </Stack>
                )
              )}
            </Stack>
          </Stack>
        );
      })}{" "}
    </Stack>
  );
};

export default CGVTicket;
