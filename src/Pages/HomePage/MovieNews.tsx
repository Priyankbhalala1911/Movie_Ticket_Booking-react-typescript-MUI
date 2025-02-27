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
import { MovieNewsData } from "../../Data/MovieNewsData";
import { Link, useNavigate } from "react-router";

interface MovieProps {
  loading: boolean;
}

const MovieNews: React.FC<MovieProps> = (props) => {
  const navigate = useNavigate();
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
                TIX ID News
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
          {MovieNewsData.slice(0, 3).map((news, index) => (
            <Card
              key={index}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              {loading ? (
                <CardMedia
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/news/video/${news.id}`);
                  }}
                >
                  <img
                    src={news.image}
                    alt={news.newsTitle}
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </CardMedia>
              ) : (
                <Skeleton
                  variant="rounded"
                  component={CardMedia}
                  sx={{ width: "100%", height: "214px" }}
                />
              )}
              <CardActions sx={{ pt: "25px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/news/${news.id}`);
                  }}
                >
                  {news.buttonName}
                </Button>
              </CardActions>
              <CardContent sx={{ px: "8px" }}>
                <Typography variant="h4" color="primary">
                  {news.newsTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#5A637A", pt: "18px" }}
                >
                  {news.date} | TIX ID
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default MovieNews;
