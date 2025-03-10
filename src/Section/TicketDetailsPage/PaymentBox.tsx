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
import { useNavigate } from "react-router";

import { useState } from "react";
import { Dana } from "../../assets";
import PaymentMethodDialog from "../../components/PaymentMethod";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

interface method {
  name: string;
  logo: string;
}

const convertPrice = (price: number): string => {
  return price.toLocaleString("de-DE", {
    minimumFractionDigits: 3,
  });
};

const PaymentBox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const selectedSeat = useSelector(
    (state: RootState) => state.seats.selectedSeat
  );
  const selectedPrice = useSelector(
    (state: RootState) => state.shows.showPrice
  );
  const [selectMethod, setSelectMethod] = useState<method | null>({
    name: "DANA",
    logo: Dana,
  });
  const navigate = useNavigate();

  const Regularprice = Number(selectedPrice) * selectedSeat.length;

  const ServiceFees = 1.0 * selectedSeat.length;
  const PromoVoucher = 10.0;

  const TotalPrice = Regularprice + ServiceFees - PromoVoucher;

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
                Rp. {convertPrice(Regularprice)}{" "}
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
                Rp. {convertPrice(ServiceFees)}{" "}
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
              <Typography>- Rp. {convertPrice(PromoVoucher)}</Typography>
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
                Rp. {convertPrice(TotalPrice)}
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
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => setOpen(true)}
              >
                See All
              </Typography>
            </Stack>
          </Box>
          <Box mt="24px">
            <Stack direction="row" alignItems="center" gap="16px">
              <img src={selectMethod?.logo} alt="Dana Logo" width="40px" />
              <Typography variant="h6" color="primary">
                {selectMethod?.name}
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
              navigate("/payment-success");
              window.scrollTo(0, 0);
            }}
          >
            <Typography variant="h5" color="warning">
              BUY TICKETS
            </Typography>
          </Button>
        </CardActions>
      </Card>
      {open && (
        <PaymentMethodDialog
          open={open}
          onClose={() => setOpen(false)}
          setSelectMethod={setSelectMethod}
        />
      )}
    </>
  );
};
export default PaymentBox;
