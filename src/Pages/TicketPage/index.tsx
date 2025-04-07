import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import TicketDetails from "../../Section/TicketPage/TicketDetails";
import PaymentDetails from "../../Section/TicketPage/PaymentDetails";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Ticket } from "../../services/ticket";

const TicketPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => (id ? Ticket(id) : Promise.reject("Ticket ID is undefined")),
    staleTime: 0,
    gcTime: 0,
  });
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

      {isLoading ? (
        <Skeleton variant="rounded" width="638px" height="575px" />
      ) : (
        <TicketDetails data={data} />
      )}
      {!isLoading && <PaymentDetails data={data} />}
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
          onClick={() => navigate("/my-ticket/active-ticket")}
        >
          Return
        </Button>
      </Box>
    </Stack>
  );
};

export default TicketPage;
