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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { FormattedDate, getCurrentDay } from "../../Utils";
import { City, Day } from "../../types";
import { useEffect } from "react";
import { selectDate } from "../../Store/Slices/MovieSlice";
import { clearSeat } from "../../Store/Slices/SeatSlice";
const SlotBooking: React.FC = () => {
  const { id } = useParams();
  const city = useSelector((state: RootState) => state.filterTheater.location);
  const chain = useSelector((state: RootState) => state.filterTheater.brand);
  const cinema = useSelector((state: RootState) => state.filterTheater.cinema);
  const type = useSelector((state: RootState) => state.filterTheater.type);
  const selectdDate = useSelector(
    (state: RootState) => state.movies.selectedDate
  );
  const day = getCurrentDay(selectdDate);
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["Movies", city, day, chain, cinema, type, id],
    queryFn: () =>
      id
        ? handelMovieById(id, city, day, chain, cinema, type)
        : Promise.reject("Movie ID is undefined"),
    staleTime: 0,
    gcTime: 0,
    retry: true,
  });

  useEffect(() => {
    dispatch(selectDate(FormattedDate(new Date(selectdDate))));
    dispatch(clearSeat());
  }, [dispatch, selectdDate]);
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
              <CityLocation
                city={Array.from(
                  new Set(data?.cities.flatMap((city: City) => city.name))
                )}
              />
              <SearchTicket
                theatres={data?.cities.flatMap((city: City) =>
                  city.days
                    .filter((days: Day) => days.day === day)
                    .flatMap((day: Day) => day.theatres || [])
                )}
              />
              {!data?.response?.data?.message ? (
                <CategoryTicket
                  loading={isLoading}
                  theatres={data?.cities.flatMap((city: City) =>
                    city.days
                      .filter((days: Day) => days.day === day)
                      .flatMap((day: Day) => day.theatres || [])
                  )}
                />
              ) : (
                data?.response?.data?.message
              )}
            </Grid>

            <Grid item xs={12} md={4} sm={5}>
              {id && <MovieDetails id={id} />}
              <BuyBooking />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
export default SlotBooking;
