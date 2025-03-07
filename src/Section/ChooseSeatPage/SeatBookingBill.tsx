import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

interface SeatProps {
  selectedSeats: Set<string>;
}
const SeatBookingBill: React.FC<SeatProps> = ({ selectedSeats }) => {
  const seatPrice = 45000;
  const totalPrice = selectedSeats.size * seatPrice;
  const formattedTotalPrice = totalPrice.toLocaleString("de-DE");
  const navigate = useNavigate();
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
            RP. {formattedTotalPrice}
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Typography color="#5A637A" variant="h6">
            Chair
          </Typography>

          {selectedSeats.size > 0 ? (
            <Typography variant="h1" color="primary">
              {[...selectedSeats].join(", ")}{" "}
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
                navigate("/slot-booking");
                window.scrollTo(0, 0);
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
