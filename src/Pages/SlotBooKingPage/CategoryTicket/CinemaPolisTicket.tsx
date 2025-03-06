import { Grade } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { customColors } from "../../../Theme";

const CinemaPolis: React.FC = () => {
  return (
    <Stack gap="24px">
      <Stack gap="18px">
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: "#1A2C50", width: "32px", height: "32px" }}>
            <Grade sx={{ color: `${customColors.pastelYellow}` }} />
          </Avatar>
          <Typography
            fontSize={{ lg: "24px", md: "22px", sm: "20px", xs: "18px" }}
            fontWeight={600}
            color="primary"
            flex={1}
            px="16px"
          >
            MANGGO TWO SQUARE CINEMAPOLIS
          </Typography>
          <Button sx={{ bgcolor: "#000E62" }} variant="contained" size="small">
            CinemaPolis
          </Button>
        </Box>
        <Box component={Typography} variant="body1" color="#5A637A">
          JL. MH. TAHMRIN NO.1
        </Box>
      </Stack>
      <Stack gap="36px">
        <Stack gap="16px">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" color="#5A637A" flex={1}>
              2D
            </Typography>
            <Typography variant="subtitle1" color="#5A637A">
              Rp. 30,000
            </Typography>
          </Box>
          <Grid container spacing={2} lg={6}>
            {[...Array(3)].map((_, index) => (
              <Grid item lg={3} key={index}>
                <Button variant="contained" color="primary">
                  11:00
                </Button>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CinemaPolis;
