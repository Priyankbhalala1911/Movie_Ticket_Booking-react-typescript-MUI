import { Divider, Stack, Typography } from "@mui/material";

const PaymentDetails: React.FC<any> = ({ data }) => {
  return (
    <Stack gap="20px" mt="64px">
      <Typography variant="h4" color="primary">
        Purchase Details
      </Typography>
      <Stack>
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
            Rp. {(data?.seat_price ?? 0).toFixed(2)}
            <b style={{ color: "#414A63" }}> X{data?.seat_number.length}</b>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="12px"
        >
          <Typography variant="body1" color="primary" flex={1}>
            SERVICE FEE
          </Typography>
          <Typography>
            Rp. 1.00
            <b style={{ color: "#414A63" }}> X{data?.seat_number.length}</b>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="12px"
        >
          <Typography variant="body1" color="primary" flex={1}>
            PROMO TIX ID
          </Typography>
          <Typography>
            - Rp. 10.00
            <b style={{ color: "#414A63" }}> X{data?.seat_number.length}</b>
          </Typography>
        </Stack>
        <Divider sx={{ mt: "27px" }} />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="12px"
        >
          <Typography variant="body1" color="primary" flex={1}>
            TOTAL PAYMENT
          </Typography>
          <Typography fontWeight={700} color="primary">
            Rp. {(data?.total_amount ?? 0).toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PaymentDetails;
