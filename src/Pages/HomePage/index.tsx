import React, { useEffect, useState } from "react";
import CarsoulMovie from "../../Section/HomePage/CarsoulMovie";
import { Container } from "@mui/material";
import CarsoualAdv from "../../Section/HomePage/CarsoulAdv";
import MovieNews from "../../Section/HomePage/MovieNews";
import MoviePoster from "../../Section/HomePage/MoviePoster";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Container
        sx={{
          mt: "80px",
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        }}
        maxWidth="xl"
      >
        <CarsoulMovie />
        <CarsoualAdv />
        <MovieNews loading={loading} />
        <MoviePoster loading={loading} />
      </Container>
    </>
  );
};
export default Home;
