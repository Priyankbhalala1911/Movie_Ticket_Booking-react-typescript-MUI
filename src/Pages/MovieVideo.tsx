import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { MovieNewsData } from "../Data/MovieNewsData";
import {
  Close,
  Facebook,
  Instagram,
  PlayCircleOutlined,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import ReactPlayer from "react-player";

interface MovieVideoId {
  id: number;
}
const MovieVideo: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  const { id } = useParams<MovieVideoId | any>();
  const navigate = useNavigate();

  const movieVideo = MovieNewsData.find((news) => news.id === Number(id));

  const updateMovieVideo = MovieNewsData.filter(
    (news) => news.id !== Number(id)
  );

  return (
    <>
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
            <Typography variant="h1" color="primary">
              Trailer - {movieVideo?.newsTitle}
            </Typography>
            <Typography variant="subtitle1" color="#5A637A">
              {movieVideo?.date} | TIX ID
            </Typography>
          </Stack>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={movieVideo?.image}
              alt={movieVideo?.newsTitle}
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
            <Dialog
              open={play}
              onClose={() => setPlay(false)}
              fullWidth
              maxWidth="md"
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <IconButton
                  onClick={() => setPlay(false)}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 2,
                    color: "white",
                  }}
                >
                  <Close />
                </IconButton>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <ReactPlayer
                    url={movieVideo?.video}
                    width="100%"
                    height="100%"
                    controls
                    playing
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </Box>
              </Box>
            </Dialog>
          </Box>
          <Box>
            <Typography variant="h4" color="primary">
              Source: {movieVideo?.source} | YouTube
            </Typography>
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
          {updateMovieVideo.map((news, index) => (
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
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/news/${news.id}`);
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
      </Container>
    </>
  );
};
export default MovieVideo;
