import { Box, Grid, Stack, Typography } from "@mui/material";
import Details from "../../Section/TicketDetailsPage/Details";
import PaymentBox from "../../Section/TicketDetailsPage/PaymentBox";

const TicketDetails: React.FC = () => {
  return (
    <Stack
      sx={{
        mt: "24px",
        mb: "100px",
        px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
      }}
      gap="18px"
    >
      <Typography variant="h1" color="primary">
        Payment Confirmation
      </Typography>
      <Typography variant="body1" color="primary">
        Confirm payment for the seat you ordered
      </Typography>

      <Grid container spacing={{ lg: 10, md: 8, sm: 3, xs: 3 }} mt="65px">
        <Grid item xs={12} sm={6}>
          <Box width="100%">
            <Details />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box width="100%">
            <PaymentBox />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TicketDetails;
