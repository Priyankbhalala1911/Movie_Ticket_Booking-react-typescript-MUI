import { Box, Grid, Stack, Typography } from "@mui/material";
import DateSelection from "../../Section/SlotBookingPage/DateSelection";
import MovieDetails from "../../Section/SlotBookingPage/MovieDetails";
import BuyBooking from "../../Section/SlotBookingPage/BuyBooking";
import CityLocation from "../../Section/SlotBookingPage/CityLocation";
import SearchTicket from "../../Section/SlotBookingPage/SearchTicket";
import CategoryTicket from "../../Section/SlotBookingPage/CategoryTicket";
import { useParams } from "react-router";
import { handelMovieById } from "../../services/movie";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { getCurrentDay } from "../../Utils";
const SlotBooking: React.FC = () => {
  const { id } = useParams();
  const city = useSelector((state: RootState) => state.filterTheater.location);
  const chain = useSelector((state: RootState) => state.filterTheater.brand);
  const selectDate = useSelector(
    (state: RootState) => state.movies.selectedDate
  );
  const day = getCurrentDay(selectDate);

  const { data, isLoading } = useQuery({
    queryKey: ["Movies", city, day, chain],
    queryFn: () =>
      id
        ? handelMovieById(id, city, day, chain)
        : Promise.reject("Movie ID is undefined"),
    staleTime: 0,
    gcTime: 0,
    retry: true,
  });

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
              {!data?.response?.data?.message ? (
                <CategoryTicket
                  loading={isLoading}
                  theaters={data?.cities.flatMap((city: any) =>
                    city.days
                      .filter((days: any) => days.day === day)
                      .flatMap((day: any) => day.theatres || [])
                  )}
                />
              ) : (
                data?.response?.data?.message
              )}
            </Grid>

            <Grid item xs={12} md={4} sm={5}>
              <MovieDetails movie={data ? data : []} loading={isLoading} />
              <BuyBooking />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
export default SlotBooking;
