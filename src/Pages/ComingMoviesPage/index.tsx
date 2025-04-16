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
import { useQuery } from "@tanstack/react-query";
import { handleComingMovies } from "../../services/ComingMovies";
import { customColors } from "../../Theme";

const chainColors: Record<string, string> = {
  INOX: `linear-gradient(${customColors.xxiGradientStart}, ${customColors.xxiGradientEnd})`,
  CGV: customColors.CGVColor,
  Cinepolis: customColors.cinepolisBlue,
  PVR: `linear-gradient(${customColors.pastelYellow},${customColors.CGVColor}, ${customColors.cinepolisBlue})`,
};

const ComingMovies: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["comingMovies"],
    queryFn: () => handleComingMovies(),
    staleTime: 0,
    gcTime: 0,
  });

  const skeletonArray = Array.from({ length: 6 });

  return (
    <Box
      sx={{
        mt: "50px",
        mb: "160px",
        px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        display: "flex",
        gap: "48px",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 0 } }}>
            <Typography variant="h4" color="primary">
              Coming Soon
            </Typography>
          </Container>
          <Container sx={{ textAlign: "end", px: { xs: 0 } }}></Container>
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
        {(isLoading ? skeletonArray : data)?.map(
          (
            item: {
              movie_poster: string;
              movie_title: string;
              chain: string[];
            },
            index: number
          ) => (
            <Card key={index} sx={{ cursor: "pointer", borderRadius: "12px" }}>
              <CardMedia sx={{ height: "607px" }}>
                {isLoading ? (
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                ) : (
                  <img
                    src={item.movie_poster}
                    alt={item.movie_title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              </CardMedia>
              <CardContent sx={{ px: "8px" }}>
                {isLoading ? (
                  <Skeleton variant="text" width="80%" height={32} />
                ) : (
                  <Typography variant="h4" color="primary">
                    {item.movie_title}
                  </Typography>
                )}
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  px: 1,
                  mb: "20px",
                }}
              >
                {isLoading ? (
                  <>
                    <Skeleton variant="rounded" width={80} height={36} />
                    <Skeleton variant="rounded" width={100} height={36} />
                  </>
                ) : (
                  item.chain.map((chain: string, i: number) => (
                    <Button
                      key={i}
                      variant="contained"
                      sx={{
                        background: chainColors[chain],
                        fontSize: "0.875rem",
                      }}
                    >
                      {chain}
                    </Button>
                  ))
                )}
              </CardActions>
            </Card>
          )
        )}
      </Box>
    </Box>
  );
};

export default ComingMovies;
