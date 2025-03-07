import React, { useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { customColors } from "../../Theme";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { MovieData } from "../../Data/MovieData";

interface Movie {
  loading: boolean;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1536, min: 1200 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

const CarsoulMovie: React.FC<Movie> = ({ loading }) => {
  const carouselRef = useRef<any>(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        my: "60px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <IconButton
        onClick={() => carouselRef.current?.previous()}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          p: 0,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            height: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <ArrowBackIosNew
            sx={{ fontSize: { lg: "22px", sm: "18px", xs: "12px" } }}
          />
        </Paper>
      </IconButton>

      <Container
        sx={{
          maxWidth: { lg: "1078px", md: "850px", sm: "650px", xs: "290px" },
          width: "100%",
          mx: "auto",
          p: { xs: 0 },
        }}
      >
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          arrows={false}
        >
          {MovieData.map((item, index) => (
            <Card
              sx={{
                width: { lg: "500px", md: "391px", sm: "301px", xs: "100%" },
                textAlign: "center",
                transition: "all 0.5s ease-in-out",
                mx: { lg: "19.5px", md: "17px", sm: "12px", xs: "0" },
                "&:hover": { cursor: "pointer" },
              }}
              elevation={0}
              key={index}
              onClick={() => navigate(`/slot-booking/${item.title}`)}
            >
              {loading ? (
                <CardMedia
                  sx={{
                    width: "100%",
                    height: {
                      lg: "707px",
                      md: "607px",
                      xs: "407px",
                    },
                  }}
                >
                  <img
                    src={item.image}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "25px", objectFit: "cover" }}
                    alt={item.title}
                  />
                </CardMedia>
              ) : (
                <Skeleton
                  variant="rounded"
                  sx={{
                    width: "100%",
                    height: {
                      lg: "707px",
                      md: "607px",
                      xs: "407px",
                    },
                    borderRadius: "25px",
                  }}
                />
              )}

              <CardContent>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: {
                      lg: "36px",
                      md: "32px",
                      sm: "28px",
                      xs: "24px",
                    },
                    fontWeight: { md: "700", xs: "500" },
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  px: 0,
                  gap: 1,
                }}
              >
                {loading ? (
                  item.brands.xxi && (
                    <Button
                      variant="contained"
                      sx={{
                        background: `linear-gradient(${customColors.xxiGradientStart},${customColors.xxiGradientEnd})`,
                      }}
                    >
                      XXI
                    </Button>
                  )
                ) : (
                  <Skeleton variant="rounded" width={80} height={36} />
                )}

                {loading ? (
                  item.brands.cgv && (
                    <Button variant="contained" color="secondary">
                      CGV
                    </Button>
                  )
                ) : (
                  <Skeleton variant="rounded" width={80} height={36} />
                )}

                {loading ? (
                  item.brands.cinemapolis && (
                    <Button
                      variant="contained"
                      sx={{ background: `${customColors.cinepolisBlue}` }}
                    >
                      CINEMAPOLIS
                    </Button>
                  )
                ) : (
                  <Skeleton variant="rounded" width={100} height={36} />
                )}
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </Container>

      <IconButton
        onClick={() => carouselRef.current?.next()}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          p: 0,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            height: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <ArrowForwardIos
            sx={{ fontSize: { lg: "22px", sm: "18px", xs: "12px" } }}
          />
        </Paper>
      </IconButton>
    </Box>
  );
};

export default CarsoulMovie;
