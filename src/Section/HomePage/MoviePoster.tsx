import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { handleComingMovies } from "../../services/ComingMovies";
import { customColors } from "../../Theme";

const chainColors: Record<string, string> = {
  INOX: `linear-gradient(${customColors.xxiGradientStart}, ${customColors.xxiGradientEnd})`,
  CGV: customColors.CGVColor,
  Cinepolis: customColors.cinepolisBlue,
  PVR: `linear-gradient(${customColors.pastelYellow},${customColors.CGVColor}, ${customColors.cinepolisBlue})`,
};

const MoviePoster: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["comingMovies"],
    queryFn: () => handleComingMovies(),
    staleTime: 0,
    gcTime: 0,
  });
  return (
    <>
      <Box
        sx={{
          my: { lg: "184px", md: "154px", sm: "124px", xs: "94px" },
          display: "flex",
          gap: "48px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Container
              maxWidth="xl"
              sx={{
                px: { xs: 0 },
              }}
            >
              <Typography variant="h4" color="primary">
                Coming Soon
              </Typography>
            </Container>
            <Container sx={{ textAlign: "end", px: { xs: 0 } }}>
              <Typography
                variant="h4"
                sx={{
                  display: `${isLoading ? "none" : "block"}`,
                }}
              >
                <Link
                  to={"/comingMovies"}
                  style={{ color: "#118EEA", textDecoration: "none" }}
                >
                  See All
                </Link>
              </Typography>
            </Container>
          </Box>
          <Typography variant="body1" color="primary">
            Wait for its presence in your favorite cinema!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "80px",
          }}
        >
          {isLoading ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                gap: "80px",
              }}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                  <Skeleton variant="rounded" height="507px" />
                  <CardContent>
                    <Skeleton variant="text" width="80%" height={32} />
                  </CardContent>
                  <CardActions sx={{ px: 2 }}>
                    <Skeleton variant="rounded" width={80} height={36} />
                  </CardActions>
                </Card>
              ))}
            </Box>
          ) : (
            data?.slice(0, 3).map((news: any, index: number) => (
              <Card
                key={index}
                sx={{
                  cursor: "pointer",
                  borderRadius: "12px",
                  "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardMedia sx={{ height: "607px" }}>
                  <img
                    src={news.movie_poster}
                    alt={news.movie_title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ px: "8px" }}>
                  <Typography variant="h4" color="primary">
                    {news.movie_title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", mb: "20px" }}>
                  {news.chain.map((chain: any) => (
                    <Button
                      variant="contained"
                      sx={{
                        background: chainColors[chain],
                      }}
                    >
                      {chain}
                    </Button>
                  ))}
                </CardActions>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};
export default MoviePoster;
