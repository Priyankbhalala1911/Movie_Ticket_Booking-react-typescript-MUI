import { Box, Grid, Stack, Typography } from "@mui/material";
import DateSelection from "./DateSelection";
import MovieDetails from "./MovieDetails";
import BuyBooking from "./BuyBooking";
import CityLocation from "./CityLocation";
import SearchTicket from "./SearchTicket";
import CategoryTicket from "./CategoryTicket/CategoryTicket";

const SlotBooking: React.FC = () => {
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
              <CategoryTicket />
            </Grid>

            <Grid item xs={12} md={4} sm={5}>
              <MovieDetails />
              <BuyBooking />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
export default SlotBooking;
