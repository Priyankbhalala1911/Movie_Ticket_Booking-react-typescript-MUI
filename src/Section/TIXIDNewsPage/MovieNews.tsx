import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../Store";
import { useQuery } from "@tanstack/react-query";
import { MovieNewsDataApi } from "../../services/movieNews";

const MovieNews: React.FC = () => {
  const navigate = useNavigate();
  const filterNews = useSelector(
    (state: RootState) => state.filterTheater.news
  );
  const postName = useSelector(
    (state: RootState) => state.filterTheater.postName
  );
  const { data, isLoading } = useQuery({
    queryKey: [filterNews],
    queryFn: () => MovieNewsDataApi(filterNews, postName),
    staleTime: 0,
    gcTime: 0,
  });

  return (
    <>
      <Box>
        <Typography variant="h1" color="primary">
          More News
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: "15px",
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
          : data.notFilterNews.map((news: any, index: number) => (
              <Card
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transform: { sm: "scale(1.01)", xs: "scale(1.02)" },
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
                key={index}
              >
                <CardMedia
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/news/video/${news.news_id}`);
                  }}
                >
                  <img
                    src={news.image}
                    alt="nathi"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </CardMedia>
                <CardActions sx={{ pt: "25px" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ textTransform: "capitalize" }}
                    onClick={() => {
                      window.scrollTo(0, 0);
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
            ))}
      </Box>
    </>
  );
};
export default MovieNews;
