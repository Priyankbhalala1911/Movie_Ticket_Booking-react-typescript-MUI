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
import { Link, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { MovieAllNews } from "../../services/movieNews";

const MovieNews: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: () => MovieAllNews(),
    staleTime: Infinity,
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
                TIX ID News
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
                  to={"/news"}
                  style={{ color: "#118EEA", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  See All
                </Link>
              </Typography>
            </Container>
          </Box>
          <Typography variant="body1" color="primary">
            The latest news about the world of cinema for you!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "20px",
          }}
        >
          {isLoading || !data
            ? Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  sx={{
                    cursor: "pointer",
                    borderRadius: "15px",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", height: "214px" }}
                  />
                  <CardActions sx={{ pt: "25px" }}>
                    <Skeleton variant="rectangular" width={100} height={36} />
                  </CardActions>
                  <CardContent sx={{ px: "8px" }}>
                    <Skeleton variant="text" width="100%" height={80} />
                    <Skeleton
                      variant="text"
                      width="50%"
                      height={20}
                      sx={{ mt: 1 }}
                    />
                  </CardContent>
                </Card>
              ))
            : data
                ?.slice(0, 3)
                .map(
                  (
                    news: {
                      news_id: string;
                      image: string;
                      title: string;
                      buttonName: string;
                      date: string;
                    },
                    index: number
                  ) => (
                    <Card
                      key={index}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                        },
                        borderRadius: "15px",
                      }}
                    >
                      <CardMedia
                        onClick={() => {
                          navigate(`/news/video/${news.news_id}`);
                        }}
                      >
                        <img
                          src={news.image}
                          alt={news.title}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "237px",
                            borderRadius: "15px",
                          }}
                        />
                      </CardMedia>
                      <CardActions sx={{ pt: "25px" }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ textTransform: "capitalize" }}
                          onClick={() => {
                            navigate(`/news/${news.news_id}`);
                          }}
                        >
                          {news.buttonName}
                        </Button>
                      </CardActions>
                      <CardContent sx={{ px: "8px" }}>
                        <Typography variant="h4" color="primary">
                          {news.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#5A637A", pt: "18px" }}
                        >
                          {news.date} | TIX ID
                        </Typography>
                      </CardContent>
                    </Card>
                  )
                )}
        </Box>
      </Box>
    </>
  );
};
export default MovieNews;
