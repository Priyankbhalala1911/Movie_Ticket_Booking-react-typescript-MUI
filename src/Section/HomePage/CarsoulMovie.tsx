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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { selectMovie } from "../../Store/Slices/MovieSlice";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { handelMovieApi } from "../../services/movie";

const chainColors: Record<string, string> = {
  INOX: `linear-gradient(${customColors.xxiGradientStart}, ${customColors.xxiGradientEnd})`,
  CGV: customColors.CGVColor,
  Cinepolis: customColors.cinepolisBlue,
  PVR: `linear-gradient(${customColors.pastelYellow},${customColors.CGVColor}, ${customColors.cinepolisBlue})`,
};

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

const CarsoulMovie: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["MovieData"],
    queryFn: () => handelMovieApi(),
  });

  return (
    <Box
      sx={{
        width: "100%",
        my: "60px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {isError && toast.error("Network error")}
      {isLoading ? (
        <Skeleton
          variant="circular"
          sx={{
            width: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            height: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      ) : (
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
      )}

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
          {(isLoading ? Array.from(new Array(4)) : data)?.map(
            (item: any, index: number) => (
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
                onClick={() => {
                  dispatch(selectMovie(item.movie_id));
                  navigate(`/slot-booking/${item.movie_id}`);
                }}
              >
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
                  {isLoading ? (
                    <Skeleton
                      variant="rounded"
                      width="100%"
                      sx={{
                        height: { lg: "707px", md: "607px", xs: "407px" },
                        borderRadius: "25px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={item?.movie_poster}
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "25px", objectFit: "cover" }}
                      alt={item?.title}
                    />
                  )}
                </CardMedia>

                <CardContent>
                  {isLoading ? (
                    <Skeleton variant="rounded" height="48px" width="100%" />
                  ) : (
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
                      {item?.title}
                    </Typography>
                  )}
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    px: 0,
                    gap: 1,
                  }}
                >
                  {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton
                          key={index}
                          variant="rounded"
                          width={80}
                          height={36}
                        />
                      ))
                    : [
                        ...new Set(
                          item.cities.flatMap((city: any) =>
                            city.days.flatMap((day: any) =>
                              day.theatres.map((theatre: any) => theatre.chain)
                            )
                          )
                        ),
                      ].map((chain: any) => (
                        <Button
                          key={chain}
                          variant="contained"
                          sx={{
                            background: chainColors[chain] || "#ccc",
                          }}
                        >
                          {chain}
                        </Button>
                      ))}
                </CardActions>
              </Card>
            )
          )}
        </Carousel>
      </Container>

      {isLoading ? (
        <Skeleton
          variant="circular"
          sx={{
            width: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            height: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      ) : (
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
      )}
    </Box>
  );
};

export default CarsoulMovie;
