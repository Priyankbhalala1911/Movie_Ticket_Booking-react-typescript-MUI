import {
  Box,
  Button,
  Card,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../Store";
import { useQuery } from "@tanstack/react-query";
import { MovieNewsDataApi } from "../../services/movieNews";

const FilterNews: React.FC = () => {
  const filterNews = useSelector(
    (state: RootState) => state.filterTheater.news
  );
  const postName = useSelector(
    (state: RootState) => state.filterTheater.postName
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movieNews", filterNews, postName],
    queryFn: () => MovieNewsDataApi(filterNews, postName),
    staleTime: 0,
    gcTime: 0,
  });

  const navigate = useNavigate();

  return (
    <>
      {isLoading &&
        Array.from(new Array(2)).map((_, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: { lg: "63px", md: "53px", sm: "35px" },
              alignItems: "center",
              borderRadius: "20px",
              flexDirection: {
                md: `${index % 2 !== 0 ? "row-reverse" : "row"}`,
                xs: "column",
              },
              "&:hover": {
                background: "rgba(232, 233, 235, 0.61)",
              },
            }}
          >
            <Skeleton
              variant="rectangular"
              width={585}
              height={410}
              sx={{ borderRadius: "10px" }}
            />

            <Box p={{ sm: "8px 25px", xs: "20px 8px" }} maxWidth={"712px"}>
              <Skeleton
                variant="rectangular"
                width={120}
                height={40}
                sx={{ mb: "24px" }}
              />

              <Box display="flex" flexDirection="column" gap="24px">
                <Skeleton width={650} height={40} />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
              </Box>
            </Box>
          </Card>
        ))}
      {isError && (
        <Typography variant="h6" color="error" textAlign="center">
          {error instanceof Error ? error.message : "Something went wrong"}
        </Typography>
      )}
      {!isLoading && !isError && data?.filterNews?.length > 0 ? (
        data?.filterNews.map((news: any, index: number) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: { lg: "63px", md: "53px", sm: "35px" },
              alignItems: "center",
              borderRadius: "20px",
              flexDirection: {
                md: `${index % 2 !== 0 ? "row-reverse" : "row"}`,
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
              alt={news.title}
              sx={{ borderRadius: "15px" }}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/news/video/${news.news_id}`);
              }}
            />

            <Box p={{ sm: "8px 25px", xs: "20px 8px" }} maxWidth={"712px"}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ textTransform: "capitalize", mb: "24px" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/news/${news.news_id}`);
                }}
              >
                {news.buttonName}
              </Button>
              <Box display="flex" flexDirection="column" gap="24px">
                <Typography variant="h4" color="primary">
                  {news.title}
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
        ))
      ) : (
        <Typography variant="h5" color="error">
          {data?.response?.data?.message}
        </Typography>
      )}
      {!isLoading && !isError && data?.filterNews?.length === 0 && (
        <Typography variant="h6" textAlign="center" color="primary">
          No News Found
        </Typography>
      )}
    </>
  );
};
export default FilterNews;
