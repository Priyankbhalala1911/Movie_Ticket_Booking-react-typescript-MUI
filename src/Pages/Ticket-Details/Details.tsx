import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Details: React.FC = () => {
  const navigate = useNavigate();
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
              SPIDERMAN NO WAY HOME
            </Typography>
            <Divider />
          </Stack>
          <Stack gap="8px">
            <Typography variant="subtitle1" color="primary.light">
              Date
            </Typography>
            <Typography variant="h4" color="primary">
              THURSDAY, DECEMBER 17, 2021
            </Typography>
            <Divider />
          </Stack>
          <Stack flexDirection="row" gap="70px">
            <Stack gap="8px">
              <Typography variant="subtitle1" color="primary.light">
                Class
              </Typography>
              <Typography variant="h4" color="primary">
                REGULAR 2D
              </Typography>
            </Stack>
            <Stack gap="8px">
              <Typography variant="subtitle1" color="primary.light">
                O'clock(Time)
              </Typography>
              <Typography variant="h4" color="primary">
                14:40
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack gap="8px">
            <Typography variant="subtitle1" color="primary.light">
              Tickets (3)
            </Typography>
            <Typography variant="h4" color="primary">
              C8, C9, C10
            </Typography>
            <Divider />
          </Stack>
        </Stack>
        <Box>
          <Button
            disableTouchRipple
            startIcon={<KeyboardBackspace />}
            sx={{ fontSize: "20px", fontWeight: 700 }}
            onClick={() => {
              navigate("/choose-seat");
              window.scrollTo(0, 0);
            }}
          >
            Return
          </Button>
        </Box>
      </Stack>
    </>
  );
};
export default Details;
