import { Box, Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SeatsProps {
  selectedSeats: Set<string>;
  setSelectedSeats: Dispatch<SetStateAction<Set<string>>>;
}

const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const cols = 10;
const bookedSeats = new Set(["B3", "B4", "C11", "F18"]);
const ChooseSeatBlock: React.FC<SeatsProps> = ({
  setSelectedSeats,
  selectedSeats,
}) => {
  const toggleSeatSelection = (seat: string) => {
    if (bookedSeats.has(seat)) return;
    const newSelectedSeats = new Set(selectedSeats);
    if (newSelectedSeats.has(seat)) {
      newSelectedSeats.delete(seat);
    } else {
      newSelectedSeats.add(seat);
    }
    setSelectedSeats(newSelectedSeats);
  };

  console.log(selectedSeats);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 4, xm: 6, md: 8 },
          minWidth: {
            xs: "600px",
            sm: "800px",
            md: "1350px",
          },
          justifyContent: { xs: "flex-start", md: "center" },
        }}
      >
        {[0, 10].map((offset, sectionIndex) => (
          <Box key={sectionIndex} sx={{ textAlign: "center" }}>
            {rows.map((row) => (
              <Box
                key={row}
                sx={{
                  display: "flex",
                  gap: { xs: 0.5, xm: 0.75, md: 1 },
                  justifyContent: "center",
                  mb: { xs: 0.5, xm: 0.75, md: 1 },
                }}
              >
                {Array.from({ length: cols }, (_, index) => {
                  const seatNumber = index + 1 + offset;
                  const seat = `${row}${seatNumber}`;
                  return (
                    <Button
                      key={seat}
                      variant="outlined"
                      color="primary"
                      onClick={() => toggleSeatSelection(seat)}
                      disabled={bookedSeats.has(seat)}
                      sx={{
                        minWidth: 45,
                        height: 45,
                        p: 0,
                        borderRadius: 1,
                        fontSize: {
                          xs: "0.7rem",
                          sm: "0.8rem",
                          md: "0.875rem",
                        },
                        bgcolor: bookedSeats.has(seat)
                          ? "#1A2C50"
                          : selectedSeats.has(seat)
                          ? "#118EEA"
                          : "transparent",
                        color:
                          bookedSeats.has(seat) || selectedSeats.has(seat)
                            ? "white"
                            : "#1A2C50",
                        borderColor: bookedSeats.has(seat)
                          ? "#1A2C50"
                          : selectedSeats.has(seat)
                          ? "#118EEA"
                          : "#9DA8BE",
                        "&:hover": {
                          bgcolor: selectedSeats.has(seat)
                            ? "#118EEA"
                            : "#282764",
                          color: "white",
                        },
                        "&.Mui-disabled": {
                          color: "white",
                        },
                      }}
                    >
                      {seat}
                    </Button>
                  );
                })}
              </Box>
            ))}
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
