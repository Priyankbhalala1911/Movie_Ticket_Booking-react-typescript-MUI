import { Box, Divider, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { customColors } from "../../Theme";
import { FileDownloadOutlined } from "@mui/icons-material";

const movieDetails = [
  { label: "Code Booking ", value: "037491740184392" },
  { label: "Password Key ", value: "147294" },
  { label: "Chair", value: "C8, C9, 10" },
];

const TicketDetails: React.FC = () => {
    const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box position="relative">
      <Box
        bgcolor="primary.main"
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          p: { xs: "24px", sm: "32px", md: "40px" },
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          color={customColors.pastelYellow}
          pb="20px"
        >
          Spiderman: No Way Home
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="#9DA8BE">
              Location
            </Typography>
            <Typography variant="h5" color="white">
              Grand Indonesia CGV
            </Typography>
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={10}>
                <Typography variant="h6" color="#9DA8BE">
                  Date
                </Typography>
                <Typography variant="h5" color="white">
                  16 December 2021
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" color="#9DA8BE">
                  Time
                </Typography>
                <Typography variant="h5" color="white">
                  14:40
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {!isMobile && (
            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "#9DA8BE", width: "1px", height: "136px" }}
              />
            </Grid>
          )}

          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="#9DA8BE">
              Class
            </Typography>
            <Typography variant="h5" color="white">
              Regular 2D
            </Typography>

            <Typography variant="h6" color="#9DA8BE" sx={{ mt: 2 }}>
              Studio
            </Typography>
            <Typography variant="h5" color="white">
              Studio 1
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        bgcolor={customColors.pastelYellow}
        position="relative"
        sx={{
          p: { xs: "24px", sm: "32px", md: "40px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: { xs: "24px", sm: "50px" },
        }}
      >
        <TableContainer sx={{ py: "10px" }}>
          <Table sx={{ maxWidth: "350px" }}>
            <TableBody>
              {movieDetails.map((movie, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                    <Typography variant="h6" color="primary">
                      {movie.label}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                    <Typography variant="h5" color="primary">
                      {movie.value}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          width="80px"
          height="80px"
          border="3px solid black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton   
            disableTouchRipple
            sx={{ "&:hover": { background: "none" } }}
          >
            <FileDownloadOutlined sx={{ fontSize: "60px", color: "black" }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={{ sm: "12px", xs: "7px" }}
        justifyContent="center"
        position="absolute"
        bottom={{ sm: -15, xs: -5 }}
        left="50%"
        sx={{ transform: "translateX(-50%)" }}
      >
        {[...Array(17)].map((_, index) => (
          <Box
            key={index}
            width={{ lg: "25px", sm: "22px", xs: "12px" }}
            height={{ lg: "25px", sm: "22px", xs: "12px" }}
            bgcolor="white"
            borderRadius="50%"
          />
        ))}
      </Box>
    </Box>
  );
};
export default TicketDetails;
