import CarsoulMovie from "../../Section/HomePage/CarsoulMovie";
import { Container } from "@mui/material";
import CarsoualAdv from "../../Section/HomePage/CarsoulAdv";
import MovieNews from "../../Section/HomePage/MovieNews";
import MoviePoster from "../../Section/HomePage/MoviePoster";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearPayment, clearSlot } from "../../Store/Slices/ShowSlice";
import { clearSessionId } from "../../Utils";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSlot());
    clearSessionId();
    dispatch(clearPayment());
  }, [dispatch]);
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
