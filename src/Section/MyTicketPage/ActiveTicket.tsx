import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Place } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { MyTicket } from "../../services/myTicket";

const ActiveTicket: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["myticket"],
    queryFn: () => MyTicket(),
    staleTime: 0,
    gcTime: 0,
  });
  const skeletonArray = Array(2).fill(0);

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

      <Stack width="100%">
        {isLoading ? (
          skeletonArray.map((_, index) => (
            <Box key={index}>
              <Card
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { lg: "48px", md: "36px", sm: "15px", xs: "5px" },
                  my: "16px",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={135}
                  height={202}
                  sx={{ borderRadius: "10px" }}
                />
                <CardContent sx={{ width: "100%" }}>
                  <Stack gap="12px">
                    <Skeleton variant="text" width="50%" height={30} />
                    <Skeleton variant="text" width="30%" height={20} />
                    <Skeleton variant="text" width="80%" height={20} />
                  </Stack>
                </CardContent>
              </Card>
              {index !== skeletonArray.length - 1 && <Divider />}
            </Box>
          ))
        ) : data?.length > 0 && !isError ? (
          data?.map((ticket: any, index: number) => (
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
                onClick={() => navigate(`/ticket/${ticket.id}`)}
              >
                <CardMedia
                  component="img"
                  image={ticket.movie_poster}
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
              </Card>
              {index !== data.length - 1 && <Divider />}
            </Box>
          ))
        ) : (
          <Typography variant="h5" color="error">
            {data?.response?.data?.message}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default ActiveTicket;
