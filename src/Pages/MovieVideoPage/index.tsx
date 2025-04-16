import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import {
  Facebook,
  Instagram,
  PlayCircleOutlined,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "@tanstack/react-query";
import { MovieNewsByID } from "../../services/movieNews";

const MovieVideo: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => (id ? MovieNewsByID(id) : Promise.reject("ID is undefined")),
    staleTime: 0,
    gcTime: 0,
  });

  return (
    <Container
      sx={{
        px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        mt: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
        mb: "160px",
      }}
      maxWidth="xl"
    >
      <Stack
        m={"auto"}
        width={{ lg: "858px", md: "758px", xs: "auto" }}
        gap={{ lg: "68px", md: "58px", sm: "48px", xs: "38px" }}
      >
        <Stack gap="32px">
          {isLoading ? (
            <Skeleton variant="text" width="60%" height={60} />
          ) : (
            <Typography variant="h1" color="primary">
              Trailer - {data?.newsDataByID.title}
            </Typography>
          )}
          {isLoading ? (
            <Skeleton variant="text" width="30%" height={30} />
          ) : (
            <Typography variant="subtitle1" color="#5A637A">
              {data?.newsDataByID.date} | TIX ID
            </Typography>
          )}
        </Stack>
        <Card
          sx={{ position: "relative", width: "100%", borderRadius: "15px" }}
          elevation={play ? 0 : 1}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" width="100%" height={450} />
          ) : play ? (
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url={data?.newsDataByID.video}
                width="100%"
                height="100%"
                controls
                playing
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Box>
          ) : (
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={data?.newsDataByID.image}
                alt={data?.newsDataByID.title}
                sx={{ borderRadius: "15px" }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  color: "#FFFFFF",
                }}
                onClick={() => setPlay(true)}
              >
                <PlayCircleOutlined
                  sx={{
                    fontSize: {
                      lg: "150px",
                      md: "130px",
                      sm: "110px",
                      xs: "90px",
                    },
                  }}
                />
              </IconButton>
            </Box>
          )}
        </Card>
        <Box>
          {isLoading ? (
            <Skeleton variant="text" width="40%" height={40} />
          ) : (
            <Typography variant="h4" color="primary">
              Source: {data?.newsDataByID.source} | YouTube
            </Typography>
          )}
        </Box>
        <Stack gap="14px">
          <Typography variant="h4" color="primary">
            Share This Articles
          </Typography>
          <Stack flexDirection="row" gap="18px">
            <IconButton sx={{ p: 0 }} color="primary">
              <Instagram />
            </IconButton>
            <IconButton sx={{ p: 0 }} color="primary">
              <Twitter />
            </IconButton>
            <IconButton sx={{ p: 0 }} color="primary">
              <Facebook />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Box textAlign="center" pt="64px">
        <Typography variant="h2" color="primary">
          See Other Videos
        </Typography>
      </Box>
      <Box
        sx={{
          pt: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {isLoading
          ? Array.from(new Array(3)).map((_, index) => (
              <Card key={index}>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <CardActions sx={{ pt: "25px" }}>
                  <Skeleton variant="text" width="60%" height={40} />
                </CardActions>
                <CardContent sx={{ px: "8px" }}>
                  <Skeleton variant="text" width="80%" height={30} />
                  <Skeleton variant="text" width="40%" height={20} />
                </CardContent>
              </Card>
            ))
          : data?.anotherNews.map(
              (
                news: {
                  news_id: string;
                  image: string;
                  buttonName: string;
                  title: string;
                  date: string;
                },
                index: number
              ) => (
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
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/news/${news.news_id}`);
                      }}
                      variant="outlined"
                      color="primary"
                      sx={{ textTransform: "capitalize" }}
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
    </Container>
  );
};
export default MovieVideo;
