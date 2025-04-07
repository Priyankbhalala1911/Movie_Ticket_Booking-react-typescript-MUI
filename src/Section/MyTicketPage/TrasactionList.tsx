import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  CardActions,
  Skeleton,
} from "@mui/material";
import { Place } from "@mui/icons-material";
import { MyTicket } from "../../services/myTicket";
import { useQuery } from "@tanstack/react-query";

const ActiveTicket: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useQuery({
    queryKey: ["myticket"],
    queryFn: () => MyTicket(),
    staleTime: 0,
    gcTime: 0,
  });

  const skeletonCount = 2;

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

      <Stack width="100%" spacing={2}>
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <Box key={index}>
                <Card
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { lg: "48px", md: "36px", sm: "15px", xs: "5px" },
                    py: "16px",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width={isMobile ? 85 : 135}
                    height={isMobile ? 100 : 202}
                    sx={{ borderRadius: "10px" }}
                  />
                  <CardContent sx={{ width: "100%" }}>
                    <Stack gap="12px">
                      <Skeleton
                        variant="text"
                        width="60%"
                        height={isMobile ? 20 : 30}
                      />
                      <Skeleton
                        variant="text"
                        width="40%"
                        height={isMobile ? 15 : 20}
                      />
                      <Skeleton
                        variant="text"
                        width="80%"
                        height={isMobile ? 15 : 20}
                      />
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Skeleton
                      variant="rounded"
                      width={isMobile ? 60 : 100}
                      height={isMobile ? 20 : 35}
                    />
                  </CardActions>
                </Card>
                {index !== skeletonCount - 1 && <Divider />}
              </Box>
            ))
          : data?.map((ticket: any, index: number) => (
              <Box key={index}>
                <Card
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { lg: "48px", md: "36px", sm: "15px", xs: "5px" },
                    py: "16px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={ticket.movie_poster}
                    alt="movie"
                    sx={{
                      width: { xs: "85px", sm: "135px" },
                      height: { xs: "auto", sm: "202px" },
                      borderRadius: "10px",
                    }}
                  />
                  <CardContent sx={{ width: "100%" }}>
                    <Stack gap="12px">
                      <Typography
                        variant={isMobile ? "body2" : "h5"}
                        color="primary"
                      >
                        {ticket.movie_title}
                      </Typography>
                      <Typography
                        variant={isMobile ? "body2" : "body1"}
                        color="primary"
                      >
                        {ticket.show_date}, {ticket.show_time}
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
                          {ticket.location}
                        </Typography>
                        <Typography
                          color="primary"
                          variant={isMobile ? "caption" : "body2"}
                          fontWeight={500}
                        >
                          ({ticket.show_type})
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Box
                      bgcolor={
                        ticket.payment_status ? "success.main" : "error.main"
                      }
                      textAlign="center"
                      color="white"
                      p={{
                        lg: "10px 24px",
                        md: "8px 20px",
                        sm: "6px 16px",
                        xs: "4px 12px",
                      }}
                      borderRadius="4px"
                      sx={{ fontSize: { md: "16px", xs: "8px" } }}
                      fontWeight={500}
                    >
                      {ticket.payment_status ? "Succeeded" : "Failed"}
                    </Box>
                  </CardActions>
                </Card>
                {index !== data.length - 1 && <Divider />}
              </Box>
            ))}
      </Stack>
    </Stack>
  );
};

export default ActiveTicket;
