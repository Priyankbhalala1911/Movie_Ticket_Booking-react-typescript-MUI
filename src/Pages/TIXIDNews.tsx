import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MovieNewsData } from "../Data/MovieNewsData";
import { useNavigate } from "react-router";

const Movies: string[] = [
  "Spiderman",
  "Peter Parker",
  "Yowis Ben",
  "Ghostbusters",
  "Indonesian movie",
  "Action",
];

const TIXIDNews: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  return (
    <>
      <Container
        sx={{
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
          mt: "50px",
          mb: "160px",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography variant="h1" color="primary" sx={{ pb: "18px" }}>
            TIX ID News
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="primary">
            The latest news about the world of cinema for you!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            pt: "31px",
          }}
        >
          <Box
            sx={{
              width: "576px",
              border: "1px solid #BDC5D4",
              borderRadius: "6px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              p: "8px 12px",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Search Post"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#1A2C50",
                },
                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                  display: "none",
                },
              }}
            ></TextField>
            <IconButton sx={{ p: 0 }}>
              <Search color="primary" />
            </IconButton>
          </Box>
          <Box>
            <Select
              displayEmpty
              variant="standard"
              value={filter}
              onChange={(e: SelectChangeEvent) => setFilter(e.target.value)}
              sx={{
                minWidth: 77,
                "& .MuiSelect-select": {
                  padding: "8px",
                  backgroundColor: "transparent",
                  border: "none",
                },
                "&:before, &:after": {
                  display: "none",
                },
              }}
            >
              <MenuItem value="">Sort</MenuItem>
              <MenuItem value="sorted">Spotlight</MenuItem>
              <MenuItem value="unsorted">News</MenuItem>
              <MenuItem value="unsorted">Video</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          pt="24px"
          flexWrap="wrap"
        >
          {Movies.map((movie, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #BDC5D4",
                borderRadius: "23px",
                p: "12px 20px",
              }}
            >
              <Typography
                sx={{
                  color: "#8F98AA",
                  "&:hover": { color: "#1A2C50", cursor: "pointer" },
                }}
              >
                {movie}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box pt="68px" display="flex" flexDirection="column" gap="80px">
          {MovieNewsData.map((news, index) => {
            if (index === 0 || index === 1) {
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
                      md: `${index === 1 ? "row-reverse" : "row"}`,
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

                  <Box
                    p={{ sm: "8px 25px", xs: "20px 8px" }}
                    maxWidth={"712px"}
                  >
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
            }
          })}
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
            {MovieNewsData.slice(2).map((news, index) => (
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
        </Box>
      </Container>
    </>
  );
};
export default TIXIDNews;
