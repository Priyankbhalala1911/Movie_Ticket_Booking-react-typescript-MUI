import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import TicketDetails from "../../Section/TicketPage/TicketDetails";
import PaymentDetails from "../../Section/TicketPage/PaymentDetails";

const TicketPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={{
        mt: "56px",
        mb: "100px",
        width: { xs: "90%", sm: "80%", md: "638px" },
        mx: "auto",
      }}
      gap={{ xs: "24px", sm: "40px", md: "56px" }}
    >
      <Typography
        variant={isMobile ? "h2" : "h1"}
        color="primary"
        textAlign="center"
      >
        Transaction Details
      </Typography>

      <TicketDetails />
      <PaymentDetails />
      <Box mt={4}>
        <Button
          variant="text"
          sx={{
            color: "primary.main    ",
            fontSize: "20px",
            textTransform: "capitalize",
            fontWeight: 700,
          }}
          startIcon={<KeyboardBackspace />}
        >
          Return
        </Button>
      </Box>
    </Stack>
  );
};

export default TicketPage;
