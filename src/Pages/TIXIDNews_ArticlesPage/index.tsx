import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { MovieNewsData } from "../../Data/MovieNewsData";
import {
  Facebook,
  Instagram,
  ThumbUpAltOutlined,
  Twitter,
} from "@mui/icons-material";

interface IUserID {
  id: number;
}

const TIXIDNews_Articles: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id } = useParams<IUserID | any>();
  const navigate = useNavigate();

  const movie = MovieNewsData.find((news) => news.id === Number(id));
  const updateMovie = MovieNewsData.filter((news) => news.id !== Number(id));
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
          gap="68px"
        >
          <Stack gap="32px">
            <Typography variant="h1" color="primary">
              {movie?.newsTitle}
            </Typography>
            <Typography variant="subtitle1" color="#5A637A">
              {movie?.date} | TIX ID
            </Typography>
          </Stack>
          <Box>
            <CardMedia
              component="img"
              image={movie?.image}
              alt={movie?.newsTitle}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/news/video/${movie?.id}`);
              }}
            />
          </Box>
          <Stack gap="10px" textAlign="justify">
            {movie?.description.split("\n").map((para) => (
              <Typography variant="subtitle1" color="primary">
                {para}
              </Typography>
            ))}
          </Stack>
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
          <Box textAlign="center">
            <Button
              variant="outlined"
              sx={{
                fontSize: "20px",
                px: "16px",
                borderRadius: "58px",
                "&:hover": {
                  color: "#118EEA",
                  borderColor: "#118EEA",
                },
              }}
              startIcon={<ThumbUpAltOutlined />}
            >
              403
            </Button>
          </Box>
        </Stack>
        <Box textAlign="center" pt="64px">
          <Typography variant="h2" color="primary">
            See Other Articles
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
          {updateMovie.map((news, index) => (
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
export default TIXIDNews_Articles;
