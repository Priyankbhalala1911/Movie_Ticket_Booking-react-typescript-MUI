import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { handlePaymentOrder } from "../../services/payment";
import { useNavigate } from "react-router";
import { Payment } from "../../Store/Slices/ShowSlice";
import { useState } from "react";
import toast from "react-hot-toast";
const PaymentBox: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  const handlePayment = async () => {
    try {
      setLoading(true);

      const data = await handlePaymentOrder(TotalPrice, selectedMovie);

      if (data && data.id) {
        navigate(`/payment-success/${data.id}`);
        dispatch(Payment());
      } else {
        toast.error("Payment order creation failed.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Something went wrong while processing the payment.");
    } finally {
      setLoading(false);
    }
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
                ₹ {(selectedslot.showPrice ?? 0).toFixed(2)}{" "}
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
                ₹ {ServiceFees.toFixed(2)}{" "}
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
              <Typography>- ₹ {PromoVoucher.toFixed(2)}</Typography>
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
                ₹ {TotalPrice.toFixed(2)}
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
          <Button variant="contained" fullWidth onClick={handlePayment}>
            <Typography variant="h5" color="warning">
              BUY TICKETS
            </Typography>
          </Button>
        </CardActions>
      </Card>
      <Backdrop
        open={loading}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <CircularProgress color="primary" />
        <Typography variant="h5" color="primary" sx={{ ml: 2 }}>
          Verify Payment...
        </Typography>
      </Backdrop>
    </>
  );
};
export default PaymentBox;
