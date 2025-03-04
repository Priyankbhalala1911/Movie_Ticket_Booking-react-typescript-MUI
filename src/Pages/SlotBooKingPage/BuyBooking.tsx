import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const BuyBooking: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        my: "30px",
        border: "1px solid #1A2C50",
        p: "20px 8px",
        borderRadius: "12px",
      }}
      elevation={0}
    >
      <CardContent>
        <Typography variant="h3" color="primary">
          GRAND INDONESIA CGV
        </Typography>
        <Stack my="24px" gap="12px">
          <Typography variant="h6" sx={{ color: "#5A637A" }}>
            Thursday, December 16, 2021
          </Typography>
          <Box component="span" display="flex">
            <Typography flex={1} variant="h4" color="primary">
              REGULAR 2D
            </Typography>
            <Typography variant="h4" color="primary">
              14.40
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "12px", color: "#9DA8BE" }}>
            * Seat selection can be done after this
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/choose-seat")}
        >
          <Typography variant="h5" color="warning">
            BUY NOW
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
export default BuyBooking;
