import { Box, Grid, Stack, Typography } from "@mui/material";
import DateSelection from "../../Section/SlotBookingPage/DateSelection";
import MovieDetails from "../../Section/SlotBookingPage/MovieDetails";
import BuyBooking from "../../Section/SlotBookingPage/BuyBooking";
import CityLocation from "../../Section/SlotBookingPage/CityLocation";
import SearchTicket from "../../Section/SlotBookingPage/SearchTicket";
import CategoryTicket from "../../Section/SlotBookingPage/CategoryTicket";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { selectSelectedMovie } from "../../Store/Slices/MovieSlice";

const SlotBooking: React.FC = () => {
  const selectedMovie = useSelector((state: RootState) =>
    selectSelectedMovie(state)
  );

  return (
    <>
      <Stack
        sx={{
          mt: "24px",
          mb: "100px",
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        }}
        gap="18px"
      >
        <Typography variant="h1" color="primary">
          Time Table
        </Typography>
        <Typography variant="body1" color="primary">
          Select the cinema schedule that you want to watch
        </Typography>

        <Box>
          <Grid
            container
            gap={{ lg: 20, md: 16, sm: 5 }}
            spacing={{ xs: 10, sm: 0 }}
          >
            <Grid item xs={12} md={6} sm={6}>
              <DateSelection />
              <CityLocation />
              <SearchTicket />
              <CategoryTicket theaters={selectedMovie?.theaters || []} />
            </Grid>

            <Grid item xs={12} md={4} sm={5}>
              {selectedMovie ? (
                <MovieDetails movie={selectedMovie} />
              ) : (
                <Typography color="error">Movie not found</Typography>
              )}
              <BuyBooking />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
export default SlotBooking;
