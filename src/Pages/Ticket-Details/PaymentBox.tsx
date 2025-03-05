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
import { Link, useNavigate } from "react-router";
import paymentLogo1 from "../../assets/Images/PaymentLogo/Dana Logo.svg";
import { useState } from "react";
import PopUpBox from "../../components/PopupBox";

const PaymentBox: React.FC = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (error) {
      setError(true);
    } else {
      navigate("/payment-success");
      window.scrollTo(0, 0);
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
                Rp. 50.000 <b style={{ color: "#414A63" }}> X3</b>
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
                Rp. 3.000 <b style={{ color: "#414A63" }}> X3</b>
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
              <Typography>- Rp. 70.000</Typography>
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
                Rp. 89.000
              </Typography>
            </Stack>
            <Divider sx={{ mt: "18px" }} />
          </Box>
          <Box mt="32px">
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
                Payment Methods
              </Typography>

              <Typography
                fontSize="12px"
                fontWeight={700}
                color="info"
                component={Link}
                to={"/"}
                sx={{ textDecoration: "none" }}
              >
                See All
              </Typography>
            </Stack>
          </Box>
          <Box mt="24px">
            <Stack direction="row" alignItems="center" gap="16px">
              <img src={paymentLogo1} alt="Dana Logo" width="40px" />
              <Typography variant="h6" color="primary">
                DANA
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
          <Button variant="contained" fullWidth onClick={handleClick}>
            <Typography variant="h5" color="warning">
              BUY TICKETS
            </Typography>
          </Button>
        </CardActions>
      </Card>
      {error && <PopUpBox open={error} onClose={() => setError(false)} />}
    </>
  );
};
export default PaymentBox;
