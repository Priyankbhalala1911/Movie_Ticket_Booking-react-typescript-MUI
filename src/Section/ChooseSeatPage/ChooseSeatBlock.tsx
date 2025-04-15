import { Box, Button, Skeleton } from "@mui/material";
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
                {rowSeats.map((seat, i) => {
                  const isSelected = selectedSeats.some(
                    (s) => s.id === seat.id
                  );
                  const isGap = (i + 1) % 10 === 0;

                  return (
                    <Box key={seat.id} sx={{ display: "flex", gap: 1 }}>
                      <Button
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
                          mr: isGap ? 5 : 0,
                        }}
                      >
                        {seat.seat_number}
                      </Button>
                    </Box>
                  );
                })}
              </Box>
            ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          minWidth: { xs: "1000px", md: "1000px" },
          maxWidth: "100%",
          mt: "100px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Box
          component="img"
          src="https://assets-in.bmscdn.com/m6/images/seat-layout/cinema-screen.png"
          alt="Cinema Screen"
          sx={{
            width: { xs: "80%", md: "60%" },
            maxHeight: "150px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default ChooseSeatBlock;
