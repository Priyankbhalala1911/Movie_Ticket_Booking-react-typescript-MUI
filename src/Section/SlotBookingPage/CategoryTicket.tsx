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

interface Showtime {
  id: string;
  Time: string;
  Price: number;
}

interface Screen {
  id: string;
  type: string;
  showtime: Showtime[];
}

interface Theatre {
  id: string;
  name: string;
  chain: string;
  location: string;
  screens: Screen[];
}

interface TheaterProps {
  theatres: Theatre[];
  loading: boolean;
}

const CGVTicket: React.FC<TheaterProps> = ({ theatres = [], loading }) => {
  const selectedSlot = useSelector((state: RootState) => state.shows.id);
  const selectedDate = useSelector(
    (state: RootState) => state.movies.selectedDate
  );
  const selectedMovie = useSelector(
    (state: RootState) => state.movies.selectedMovie || "Unknown Movie"
  );
  const dispatch = useDispatch();
  const now = dayjs();

  return (
    <Stack gap="24px">
      {(loading ? Array.from(new Array(2)) : theatres).map((theatre, index) => (
        <Stack
          key={theatre?.id || index}
          gap="24px"
          sx={{ borderBottom: "1px solid #ddd", pb: 3 }}
        >
          <Stack gap="18px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" width="90%" alignItems="center">
                <Avatar
                  sx={{ bgcolor: "#1A2C50", width: "32px", height: "32px" }}
                >
                  <Grade sx={{ color: `${customColors.pastelYellow}` }} />
                </Avatar>
                {loading ? (
                  <Skeleton
                    width="30%"
                    height={40}
                    variant="text"
                    animation="wave"
                    sx={{ mx: "16px" }}
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
                    {theatre.name}
                  </Typography>
                )}
              </Box>

              {loading ? (
                <Skeleton
                  width={60}
                  height={30}
                  variant="rectangular"
                  sx={{ alignItems: "flex-end" }}
                />
              ) : (
                <Chip
                  label={theatre?.chain}
                  sx={{
                    background: brandColors[theatre.chain],
                    color: "white",
                    borderRadius: "5px",
                    fontWeight: 500,
                  }}
                />
              )}
            </Box>
            <Typography variant="body1" color="#5A637A">
              {theatre?.location}
            </Typography>
          </Stack>

          <Stack gap="36px">
            {(loading ? Array.from(new Array(2)) : theatre.screens)?.map(
              (screen: Screen, index: number) => (
                <Stack key={index} gap="16px">
                  <Box display="flex" alignItems="center">
                    {loading ? (
                      <Skeleton
                        width="100%"
                        height={31}
                        sx={{ maxWidth: "50%", flex: 1 }}
                      />
                    ) : (
                      <Typography variant="h4" color="#5A637A" flex={1}>
                        {screen.type}
                      </Typography>
                    )}
                  </Box>

                  <Grid container spacing={2} lg={6}>
                    {(loading ? Array.from(new Array(4)) : screen.showtime).map(
                      (show: Showtime, idx: number) => {
                        if (loading) {
                          return (
                            <Grid item lg={3} key={idx}>
                              <Skeleton width="100%" height={36} />
                            </Grid>
                          );
                        }

                        const isToday = dayjs(selectedDate).isSame(
                          dayjs(),
                          "day"
                        );

                        const showtime = dayjs(selectedDate)
                          .hour(Number(show.Time.split(":")[0]))
                          .minute(Number(show.Time.split(":")[1]));

                        const isDisabled = isToday && showtime.isBefore(now);

                        return (
                          <Grid item lg={3} key={show.id}>
                            <Button
                              variant={
                                selectedSlot === show.Time
                                  ? "contained"
                                  : "text"
                              }
                              color="primary"
                              onClick={() => {
                                if (!isDisabled) {
                                  dispatch(
                                    selectShows({
                                      id: show.id,
                                      time: show.Time,
                                      type: screen.type,
                                      price: show.Price,
                                      theaterName: theatre.name,
                                      location: theatre.location,
                                      date: selectedDate,
                                      movie_title: selectedMovie,
                                    })
                                  );
                                }
                              }}
                              sx={{
                                border:
                                  selectedSlot === show.id
                                    ? "none"
                                    : "1px solid #9DA8BE",
                                bgcolor:
                                  selectedSlot === show.id
                                    ? "primary.main"
                                    : "transparent",
                                color:
                                  selectedSlot === show.id ? "white" : "black",
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
                              {show.Time}
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
      ))}
    </Stack>
  );
};

export default CGVTicket;
