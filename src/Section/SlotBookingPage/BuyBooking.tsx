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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../Store";

const BuyBooking: React.FC = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.movies.selectedDate
  );
  const SelectedSlot = useSelector((state: RootState) => state.shows);
  const navigate = useNavigate();
  return (
    <>
      {SelectedSlot.showTimes !== null && (
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
              {SelectedSlot.theaterName}
            </Typography>
            <Stack my="24px" gap="12px">
              <Typography variant="h6" sx={{ color: "#5A637A" }}>
                {selectedDate}
              </Typography>
              <Box component="span" display="flex">
                <Typography flex={1} variant="h4" color="primary">
                  {SelectedSlot.showType}
                </Typography>
                <Typography variant="h4" color="primary">
                  {SelectedSlot.showTimes}
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
              onClick={() => {
                navigate("/choose-seat");
                window.scrollTo(0, 0);
              }}
            >
              <Typography variant="h5" color="warning">
                BUY NOW
              </Typography>
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};
export default BuyBooking;
