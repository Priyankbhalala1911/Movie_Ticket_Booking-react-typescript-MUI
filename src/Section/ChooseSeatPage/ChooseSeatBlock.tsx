import { Box, Button, Typography, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { clearSeat, selectSeat } from "../../Store/Slices/SeatSlice";
import { useEffect } from "react";

interface Seat {
  id: string;
  Row_number: string;
  seat_number: string;
  status: "available" | "pending" | "confirmed";
}

interface SeatsProps {
  seats: Seat[];
  loading: boolean;
}

const MAX_SELECT_SEAT = 5;

const ChooseSeatBlock: React.FC<SeatsProps> = ({ seats, loading }) => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(
    (state: RootState) => state.seats.selectedSeat
  );

  useEffect(() => {
    dispatch(clearSeat());
  }, [dispatch]);

  const toggleSeatSelection = (seat: Seat) => {
    if (seat.status === "confirmed") return;

    let updatedSeats = [...selectedSeats];

    const seatExists = updatedSeats.some((s) => s.id === seat.id);

    if (seatExists) {
      updatedSeats = updatedSeats.filter((s) => s.id !== seat.id);
    } else {
      if (updatedSeats.length >= MAX_SELECT_SEAT) {
        updatedSeats.shift();
      }
      updatedSeats.push({ id: seat.id, seat_number: seat.seat_number });
    }

    dispatch(selectSeat(updatedSeats));
  };

  const seatsByRow: { [key: string]: Seat[] } = seats?.reduce((acc, seat) => {
    acc[seat.Row_number] = acc[seat.Row_number] || [];
    acc[seat.Row_number].push(seat);
    return acc;
  }, {} as { [key: string]: Seat[] });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: { md: "center", xs: "flex-start" },
        }}
      >
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Box key={index} sx={{ display: "flex", gap: 1 }}>
                {Array.from({ length: 20 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width={45}
                    height={45}
                    sx={{ borderRadius: 1 }}
                  />
                ))}
              </Box>
            ))
          : Object.entries(seatsByRow).map(([row, rowSeats]) => (
              <Box
                key={row}
                sx={{ display: "flex", gap: 1, justifyContent: "center" }}
              >
                {rowSeats.map((seat) => {
                  const isSelected = selectedSeats.some(
                    (s) => s.id === seat.id
                  );
                  return (
                    <Button
                      key={seat.id}
                      variant="outlined"
                      color="primary"
                      onClick={() => toggleSeatSelection(seat)}
                      disabled={seat.status === "confirmed"}
                      sx={{
                        minWidth: 45,
                        height: 45,
                        p: 0,
                        borderRadius: 1,
                        fontSize: "0.875rem",
                        bgcolor:
                          seat.status === "confirmed"
                            ? "#1A2C50"
                            : isSelected
                            ? "#118EEA"
                            : "transparent",
                        color:
                          seat.status === "confirmed" || isSelected
                            ? "white"
                            : "#1A2C50",
                        borderColor:
                          seat.status === "confirmed"
                            ? "#1A2C50"
                            : isSelected
                            ? "#118EEA"
                            : "#9DA8BE",
                        "&:hover": {
                          bgcolor: isSelected ? "#118EEA" : "#282764",
                          color: "white",
                        },
                        "&.Mui-disabled": {
                          color: "white",
                        },
                      }}
                    >
                      {seat.seat_number}
                    </Button>
                  );
                })}
              </Box>
            ))}
      </Box>
      <Box
        sx={{
          bgcolor: "info.main",
          width: "100%",
          minWidth: { xs: "1000px", md: "1350px" },
          maxWidth: "100%",
          mt: "100px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" color="#DADFE8" textAlign="center" py="16px">
          Cinema Screen Here
        </Typography>
      </Box>
    </Box>
  );
};

export default ChooseSeatBlock;
