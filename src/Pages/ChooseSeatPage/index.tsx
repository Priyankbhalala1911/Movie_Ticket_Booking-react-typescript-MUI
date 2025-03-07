import { Box, Stack, Typography } from "@mui/material";
import ChooseTimeSlot from "../../Section/ChooseSeatPage/ChooseTimeSlot";
import ChooseSeatBlock from "../../Section/ChooseSeatPage/ChooseSeatBlock";
import SeatBookingBill from "../../Section/ChooseSeatPage/SeatBookingBill";
import { useState } from "react";

const ChooseSeat: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
  console.log(selectedSeats);
  return (
    <>
      <Stack
        sx={{
          mt: "24px",
          mb: "100px",
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        }}
        gap="18px"
      >
        <Typography variant="h1" color="primary">
          Choose a Seat
        </Typography>
        <Typography variant="body1" color="primary">
          Choose the seat you will occupy during the film screening.
        </Typography>

        <Box display="flex" alignItems="center" flexWrap={"wrap"} gap="25px">
          <Box flex={1}>
            <ChooseTimeSlot />
          </Box>
          <Stack flexDirection="row" gap="24px">
            <Stack flexDirection="row" gap="12px">
              <Box bgcolor="#1A2C50" width="16px" height="16px"></Box>
              <Typography fontSize="12px" fontWeight="700" color="primary">
                Filled
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="12px">
              <Box
                bgcolor="white"
                width="16px"
                height="16px"
                border="1px solid #9DA8BE"
              ></Box>
              <Typography fontSize="12px" fontWeight="700" color="primary">
                Empty Chair
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="12px">
              <Box bgcolor="#118EEA" width="16px" height="16px"></Box>
              <Typography fontSize="12px" fontWeight="700" color="primary">
                Choosen
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              p: { xs: 1, sm: 1.5, md: 2 },
              width: "100%",
            }}
          >
            <ChooseSeatBlock
              setSelectedSeats={setSelectedSeats}
              selectedSeats={selectedSeats}
            />
          </Box>

          <Box width="100%" mt="64px">
            <SeatBookingBill selectedSeats={selectedSeats} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};
export default ChooseSeat;
