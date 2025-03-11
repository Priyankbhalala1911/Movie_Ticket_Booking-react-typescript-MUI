import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../Store";
import { MovieNewsData } from "../../Data/MovieNewsData";

const FilterNews: React.FC = () => {
  const filterNews = useSelector(
    (state: RootState) => state.filterTheater.news
  );

  const FilterData = MovieNewsData.filter(
    (news) => news.buttonName.toLowerCase() === filterNews.toLowerCase()
  );
  const navigate = useNavigate();
  return (
    <>
      {FilterData.map((news, index) => {
        return (
          <Card
            elevation={0}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: { lg: "63px", md: "53px", sm: "35px" },
              alignItems: "center",
              borderRadius: "20px",
              flexDirection: {
                md: `${index % 2 != 0 ? "row-reverse" : "row"}`,
                xs: "column",
              },
              "&:hover": {
                background: "rgba(232, 233, 235, 0.61)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={news.image}
              alt={news.newsTitle}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/news/video/${news.id}`);
              }}
            />

            <Box p={{ sm: "8px 25px", xs: "20px 8px" }} maxWidth={"712px"}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ textTransform: "capitalize", mb: "24px" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/news/${news.id}`);
                }}
              >
                {news.buttonName}
              </Button>
              <Box display="flex" flexDirection="column" gap="24px">
                <Typography variant="h4" color="primary">
                  {news.newsTitle}
                </Typography>
                <Typography
                  color="primary"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                  }}
                >
                  {news.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#5A637A" }}>
                  {news.date} | TIX ID
                </Typography>
              </Box>
            </Box>
          </Card>
        );
      })}
    </>
  );
};
export default FilterNews;
