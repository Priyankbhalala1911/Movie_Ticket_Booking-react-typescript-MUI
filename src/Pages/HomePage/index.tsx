import CarsoulMovie from "../../Section/HomePage/CarsoulMovie";
import { Container } from "@mui/material";
import CarsoualAdv from "../../Section/HomePage/CarsoulAdv";
import MovieNews from "../../Section/HomePage/MovieNews";
import MoviePoster from "../../Section/HomePage/MoviePoster";

const Home: React.FC = () => {
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
        <MovieNews />
        <MoviePoster />
      </Container>
    </>
  );
};
export default Home;
