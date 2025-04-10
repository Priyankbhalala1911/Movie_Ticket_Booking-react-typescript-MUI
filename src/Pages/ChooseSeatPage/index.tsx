import { Box, Skeleton, Stack, Typography } from "@mui/material";
import ChooseTimeSlot from "../../Section/ChooseSeatPage/ChooseTimeSlot";
import ChooseSeatBlock from "../../Section/ChooseSeatPage/ChooseSeatBlock";
import SeatBookingBill from "../../Section/ChooseSeatPage/SeatBookingBill";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { handleScreen } from "../../services/seat";

const ChooseSeat: React.FC = () => {
  const selectedScreenID = useSelector((state: RootState) => state.shows.id);

  const { data, isLoading } = useQuery({
    queryKey: ["screen", selectedScreenID],
    queryFn: () =>
      selectedScreenID
        ? handleScreen(selectedScreenID)
        : Promise.reject("Screen ID is null"),
    gcTime: 0,
    staleTime: 0,
  });

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
              {isLoading ? (
                <Skeleton width="16px" height="16px" variant="rectangular" />
              ) : (
                <Box bgcolor="#1A2C50" width="16px" height="16px"></Box>
              )}
              <Typography fontSize="12px" fontWeight="700" color="primary">
                Filled
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="12px">
              {isLoading ? (
                <Skeleton width="16px" height="16px" variant="rectangular" />
              ) : (
                <Box
                  bgcolor="white"
                  width="16px"
                  height="16px"
                  border="1px solid #9DA8BE"
                ></Box>
              )}

              <Typography fontSize="12px" fontWeight="700" color="primary">
                Empty Chair
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="12px">
              {isLoading ? (
                <Skeleton width="16px" height="16px" variant="rectangular" />
              ) : (
                <Box bgcolor="#118EEA" width="16px" height="16px"></Box>
              )}

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
            <ChooseSeatBlock seats={data?.seats} loading={isLoading} />
          </Box>

          <Box width="100%" mt="64px">
            <SeatBookingBill />
          </Box>
        </Box>
      </Stack>
    </>
  );
};
export default ChooseSeat;
