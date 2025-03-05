import React, { useEffect, useState } from "react";
import CarsoulMovie from "./CarsoulMovie";
import { Container } from "@mui/material";
import CarsoualAdv from "./CarsoulAdv";
import MovieNews from "./MovieNews";
import MoviePoster from "./MoviePoster";
import { Outlet } from "react-router";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 3000); // Simulate API call
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
        <CarsoulMovie loading={loading} />
        <CarsoualAdv />
        <MovieNews loading={loading} />
        <MoviePoster loading={loading} />
      </Container>
    </>
  );
};
export default Home;
