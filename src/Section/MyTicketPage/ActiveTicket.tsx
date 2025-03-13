import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Place } from "@mui/icons-material";
import { Poster6 } from "../../assets";
import { useNavigate } from "react-router";

const ActiveTicket: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        py: "49px",
        px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
      }}
      gap="18px"
      flex={1}
    >
      <Typography variant={isMobile ? "h4" : "h2"} color="primary">
        My Ticket
      </Typography>
      <Typography variant="body1" color="primary">
        List of tickets and transactions you have made
      </Typography>

      <Box display="flex" flexWrap="wrap" gap="12px">
        {["Film", "Event", "Voucher"].map((btn) => (
          <Button
            key={btn}
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "25px",
              textTransform: "capitalize",
              fontSize: isMobile ? "0.8rem" : "1rem",
              px: isMobile ? 2 : 3,
            }}
          >
            {btn}
          </Button>
        ))}
      </Box>

      <Stack width="100%">
        {[1, 2, 3, 4].map((_, index) => (
          <Box key={index}>
            <Card
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { lg: "48px", md: "36px", sm: "15px", xs: "5px" },
                my: "16px",
                cursor: "pointer",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
              }}
              onClick={() => navigate("/ticket")}
            >
              <CardMedia
                component="img"
                image={Poster6}
                alt="movie"
                sx={{
                  width: "135px",
                  height: "202px",
                  borderRadius: "10px",
                }}
              />

              <CardContent sx={{ width: "100%" }}>
                <Stack gap="12px">
                  <Typography
                    variant={isMobile ? "body2" : "h5"}
                    color="primary"
                  >
                    Spiderman: No Way Home
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    color="primary"
                  >
                    Thursday, December 16, 2021, 14:40
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    flexWrap="wrap"
                  >
                    <Place sx={{ color: "#9DA8BE" }} />
                    <Typography
                      color="#9DA8BE"
                      variant={isMobile ? "caption" : "body2"}
                    >
                      Grand Indonesia CGV
                    </Typography>
                    <Typography
                      color="primary"
                      variant={isMobile ? "caption" : "body2"}
                      fontWeight={500}
                    >
                      (Regular 2D)
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
            {index !== [1, 2, 3, 4].length - 1 && <Divider />}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default ActiveTicket;
