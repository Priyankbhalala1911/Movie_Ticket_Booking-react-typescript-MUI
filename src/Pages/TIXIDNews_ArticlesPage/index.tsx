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
  ThumbUpAltOutlined,
  Twitter,
} from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { MovieNewsByID } from "../../services/movieNews";

const TIXIDNews_Articles: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => (id ? MovieNewsByID(id) : Promise.reject("ID is undefined")),
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });

  // const updateMovie = MovieNewsData.filter((news) => news.id !== Number(id));
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
            {isLoading ? (
              <Skeleton variant="text" width="70%" height={60} />
            ) : (
              <Typography variant="h1" color="primary">
                {data?.newsDataByID.title}
              </Typography>
            )}
            {isLoading ? (
              <Skeleton variant="text" width="40%" height={30} />
            ) : (
              <Typography variant="subtitle1" color="#5A637A">
                {data?.newsDataByID.date} | TIX ID
              </Typography>
            )}
          </Stack>
          <Box>
            {isLoading ? (
              <Skeleton variant="rectangular" width="100%" height={400} />
            ) : (
              <CardMedia
                component="img"
                image={data?.newsDataByID.image}
                alt={data?.newsDataByID.title}
                onClick={() => {
                  navigate(`/news/video/${data?.newsDataByID.news_id}`);
                }}
                sx={{ borderRadius: "25px", cursor: "pointer" }}
              />
            )}
          </Box>
          <Stack gap="10px" textAlign="justify">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="text"
                    width="100%"
                    height={30}
                  />
                ))
              : data?.newsDataByID.description
                  .split("\n")
                  .map((para: string, index: number) => (
                    <Typography key={index} variant="subtitle1" color="primary">
                      {para}
                    </Typography>
                  ))}
          </Stack>
          <Stack gap="14px">
            {isLoading ? (
              <Skeleton variant="text" width="30%" height={40} />
            ) : (
              <Typography variant="h4" color="primary">
                Share This Article
              </Typography>
            )}
            <Stack flexDirection="row" gap="18px">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ))
              ) : (
                <>
                  <IconButton sx={{ p: 0 }} color="primary">
                    <Instagram />
                  </IconButton>
                  <IconButton sx={{ p: 0 }} color="primary">
                    <Twitter />
                  </IconButton>
                  <IconButton sx={{ p: 0 }} color="primary">
                    <Facebook />
                  </IconButton>
                </>
              )}
            </Stack>
          </Stack>
          <Box textAlign="center">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={100}
                height={40}
                sx={{ borderRadius: "20px" }}
              />
            ) : (
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
            )}
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
          {isLoading || !data
            ? Array.from({ length: 3 }).map((_, index) => (
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
                        navigate(`/news/video/${news?.news_id}`);
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
                )
              )}
        </Box>
      </Container>
    </>
  );
};
export default TIXIDNews_Articles;
