import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../Store";
import { clearSeat } from "../../Store/Slices/SeatSlice";

const SeatBookingBill: React.FC = () => {
  const selectedSeats = useSelector(
    (state: RootState) => state.seats.selectedSeat
  );
  const selectMovie = useSelector(
    (state: RootState) => state.movies.selectedMovie
  );
  const selectSlot = useSelector((state: RootState) => state.shows);
  const totalPrice = selectedSeats.length * Number(selectSlot.showPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        textAlign={{ xs: "center", md: "start" }}
        rowSpacing={{ xs: 10 }}
      >
        <Grid item md={3} sm={6} xs={12}>
          <Typography color="#5A637A" variant="h6">
            Total
          </Typography>
          <Typography variant="h1" color="primary">
            ₹ {totalPrice.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Typography color="#5A637A" variant="h6">
            Chair
          </Typography>

          {selectedSeats.length > 0 ? (
            <Typography variant="h1" color="primary">
              {selectedSeats.map((seat) => seat.seat_number).join(", ")}
            </Typography>
          ) : (
            <Typography variant="h5" color="primary">
              No Seats Selected
            </Typography>
          )}
        </Grid>
        <Grid item md={3} sm={12} xs={12} container spacing={3}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#282764",
                  color: "white",
                },
              }}
              fullWidth
              onClick={() => {
                navigate(`/slot-booking/${selectMovie}`);
                dispatch(clearSeat());
              }}
            >
              RETURN
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                color: "warning.main",
                width: { xs: "100%", md: "auto" },
              }}
              onClick={() => {
                navigate("/ticket-details");
                window.scrollTo(0, 0);
              }}
              disabled={selectedSeats.length === 0 && true}
            >
              CONFIRMATION
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SeatBookingBill;
