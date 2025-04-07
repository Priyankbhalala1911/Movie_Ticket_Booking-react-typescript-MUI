import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { handlePaymentOrder } from "../../services/payment";
const PaymentBox: React.FC = () => {
  const selectedSeat = useSelector(
    (state: RootState) => state.seats.selectedSeat
  );
  const selectMovie = useSelector((state: RootState) => state.movies);
  console.log(selectMovie.selectedMovieId);
  const selectedslot = useSelector((state: RootState) => state.shows);

  const Regularprice = Number(selectedslot.showPrice) * selectedSeat.length;

  const ServiceFees = 1.0 * selectedSeat.length;
  const PromoVoucher = 10.0;

  const TotalPrice = Regularprice + ServiceFees - PromoVoucher;

  const selectedMovie = {
    movie_id: selectMovie.selectedMovieId,
    location: selectedslot.location,
    type: selectedslot.showType,
    date: selectedslot.date,
    price: selectedslot.showPrice,
    time: selectedslot.showTimes,
    seat_number: selectedSeat,
    total_amount: TotalPrice,
  };
  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "13px",
          border: "1px solid #C4C4C4",
          p: "10px 16px",
        }}
        elevation={5}
      >
        <CardContent>
          <Typography variant="h4" color="primary">
            Order Summary
          </Typography>
          <Box mt="32px">
            <Typography variant="body1" color="primary" fontWeight={700}>
              Transaction Details
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt="12px"
            >
              <Typography variant="body1" color="primary" flex={1}>
                REGULAR SEAT
              </Typography>
              <Typography>
                Rp. {Regularprice.toFixed(2)}{" "}
                <b style={{ color: "#414A63" }}> X{selectedSeat.length}</b>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt="7px"
            >
              <Typography variant="body1" color="primary" flex={1}>
                SERVICE FEE
              </Typography>
              <Typography>
                Rp. {ServiceFees.toFixed(2)}{" "}
                <b style={{ color: "#414A63" }}> X{selectedSeat.length}</b>
              </Typography>
            </Stack>
            <Divider sx={{ mt: "27px" }} />
          </Box>
          <Box mt="32px">
            <Typography variant="body1" color="primary" fontWeight={700}>
              Promo & Voucher
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt="12px"
            >
              <Typography variant="body1" color="primary" flex={1}>
                PROMO TIX ID
              </Typography>
              <Typography>- Rp. {PromoVoucher.toFixed(2)}</Typography>
            </Stack>
            <Divider sx={{ mt: "27px" }} />
          </Box>
          <Box mt="18px">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt="12px"
            >
              <Typography
                variant="body1"
                color="primary"
                fontWeight={700}
                flex={1}
              >
                Total Payment
              </Typography>
              <Typography fontWeight={700} color="primary">
                Rp. {TotalPrice.toFixed(2)}
              </Typography>
            </Stack>
          </Box>

          <Box mt="25px">
            <Typography color="error" variant="caption">
              *Ticket purchases cannot be cancelled.
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ px: "16px", mb: "25px" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              handlePaymentOrder(TotalPrice, selectedMovie);
            }}
          >
            <Typography variant="h5" color="warning">
              BUY TICKETS
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default PaymentBox;
