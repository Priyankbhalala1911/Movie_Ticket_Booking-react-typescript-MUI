import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PopUpBox from "../../components/PopupBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useNavigate } from "react-router";
import { clearSeat } from "../../Store/Slices/SeatSlice";

const Details: React.FC = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SelectedSeat = useSelector(
    (state: RootState) => state.seats.selectedSeat
  );
  const SelectedSlot = useSelector((state: RootState) => state.shows);

  return (
    <>
      <Stack
        width="100%"
        gap="70px"
        direction={{ xs: "column-reverse", sm: "column" }}
      >
        <Stack gap="28px">
          <Stack>
            <Typography variant="h4" color="primary">
              Schedule Details
            </Typography>
          </Stack>
          <Stack gap="8px">
            <Typography variant="subtitle1" color="primary.light">
              Movie title
            </Typography>
            <Typography variant="h4" color="primary">
              {SelectedSlot.movie_title}
            </Typography>
            <Divider />
          </Stack>
          <Stack gap="8px">
            <Typography variant="subtitle1" color="primary.light">
              Date
            </Typography>
            <Typography variant="h4" color="primary">
              {SelectedSlot.date}
            </Typography>
            <Divider />
          </Stack>
          <Stack flexDirection="row" gap="70px">
            <Stack gap="8px">
              <Typography variant="subtitle1" color="primary.light">
                Class
              </Typography>
              <Typography variant="h4" color="primary">
                {SelectedSlot.showType}
              </Typography>
            </Stack>
            <Stack gap="8px">
              <Typography variant="subtitle1" color="primary.light">
                O'clock(Time)
              </Typography>
              <Typography variant="h4" color="primary">
                {SelectedSlot.showTimes}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack gap="8px">
            <Typography variant="subtitle1" color="primary.light">
              Tickets ({SelectedSeat.length})
            </Typography>
            <Typography variant="h4" color="primary">
              {SelectedSeat.map((item) => item.seat_number).join(", ")}
            </Typography>
            <Divider />
          </Stack>
        </Stack>
        <Box>
          <Button
            disableTouchRipple
            startIcon={<KeyboardBackspace />}
            sx={{ fontSize: "20px", fontWeight: 700 }}
            onClick={() => setError(true)}
          >
            Return
          </Button>
        </Box>
        {error && (
          <PopUpBox
            open={error}
            onClose={() => setError(false)}
            title="Want to go back?"
            content="The seat you previously selected will be cancelled and you will have
          to re-select."
            action1="Back"
            action2="Cancelled"
            click_action1={() => {
              dispatch(clearSeat());
              navigate("/choose-seat");
            }}
          />
        )}
      </Stack>
    </>
  );
};
export default Details;
