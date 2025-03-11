import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../Store";
import { MovieNewsData } from "../../Data/MovieNewsData";

const MovieNews: React.FC = () => {
  const navigate = useNavigate();
  const filterNews = useSelector(
    (state: RootState) => state.filterTheater.news
  );

  const MovieNews = MovieNewsData.filter(
    (news) => news.buttonName.toLowerCase() !== filterNews.toLowerCase()
  );
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
        {MovieNews.map((news, index) => (
          <Card
            sx={{
              cursor: "pointer",
              "&:hover": {
                transform: { sm: "scale(1.05)", xs: "scale(1.02)" },
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            key={index}
          >
            <CardMedia
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/news/video/${news.id}`);
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
              <Typography variant="body2" sx={{ color: "#5A637A", pt: "18px" }}>
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
