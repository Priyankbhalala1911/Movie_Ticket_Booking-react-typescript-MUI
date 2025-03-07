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
import { MoviePosterData } from "../../Data/MoviePosterData";
import { customColors } from "../../Theme";
import { Link } from "react-router";

interface MoviePosterProps {
  loading: boolean;
}
const MoviePoster: React.FC<MoviePosterProps> = (props) => {
  const { loading } = props;
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
                  display: `${loading ? "block" : "none"}`,
                }}
              >
                <Link
                  to={"/comingMovies"}
                  style={{ color: "#118EEA", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
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
          {MoviePosterData.slice(0, 3).map((news, index) => (
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
              {loading ? (
                <CardMedia sx={{ height: "607px" }}>
                  <img
                    src={news.image}
                    alt="nathi"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CardMedia>
              ) : (
                <Skeleton
                  width="100%"
                  height="607px"
                  variant="rectangular"
                  component={CardMedia}
                />
              )}
              <CardContent sx={{ px: "8px" }}>
                <Typography variant="h4" color="primary">
                  {news.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", mb: "20px" }}>
                {loading ? (
                  <Button
                    variant="contained"
                    sx={{
                      background: `linear-gradient(${customColors.xxiGradientStart},${customColors.xxiGradientEnd})`,
                      display: `${news.brands.xxi ? "block" : "none"}`,
                    }}
                  >
                    XXI
                  </Button>
                ) : (
                  <Skeleton variant="rounded" component={Button} />
                )}

                {loading ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ display: `${news.brands.cgv ? "block" : "none"}` }}
                  >
                    CGV
                  </Button>
                ) : (
                  <Skeleton variant="rounded" component={Button} />
                )}
                {loading ? (
                  <Button
                    variant="contained"
                    sx={{
                      background: `${customColors.cinepolisBlue}`,
                      display: `${news.brands.cinemapolis ? "block" : "none"}`,
                    }}
                  >
                    CINEMAPOLIS
                  </Button>
                ) : (
                  <Skeleton variant="rounded" component={Button} />
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default MoviePoster;
