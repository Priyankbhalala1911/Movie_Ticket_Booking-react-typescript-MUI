import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { Cinema1, Cinema2 } from "../../assets";

const PaymentSuccess: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePayment = async () => {
    await navigate(`/ticket/${id}`);
  };
  return (
    <>
      <Stack
        sx={{
          mt: "100px",
          mb: "100px",
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        }}
        gap="38px"
        alignItems="center"
      >
        <Typography variant="h1" color="primary">
          Payment successful!
        </Typography>
        <Box position="relative">
          <Box
            sx={{
              transform: "rotate(9.47deg)",
              width: { xs: "85px", sm: "105px", md: "125px", lg: "140px" },
            }}
          >
            <img src={Cinema1} alt="image" width="100%" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-35%",
              left: "60%",
              width: { xs: "105px", sm: "125px", md: "155", lg: "180px" },
            }}
          >
            <img src={Cinema2} alt="image" width="100%" />
          </Box>
        </Box>
        <Typography
          variant="subtitle1"
          color="#5A637A"
          width={{ xs: "280px", sm: "380px", md: "480px", lg: "680px" }}
          textAlign="center"
          mt="51px"
        >
          Transaction details have been sent to your email, you can also check
          other ticket details in my tickets either on the website or your
          smartphone.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#5A637A",
            width: "216px",
            fontSize: "24px",
            fontWeight: 500,
            "&:hover": {
              bgcolor: "#282764",
              color: "white",
            },
          }}
          onClick={handlePayment}
        >
          Ticket
        </Button>
      </Stack>
    </>
  );
};
export default PaymentSuccess;
