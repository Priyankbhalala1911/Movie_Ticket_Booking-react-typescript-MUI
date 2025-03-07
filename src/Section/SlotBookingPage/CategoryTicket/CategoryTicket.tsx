import { Stack } from "@mui/material";
import CGVTicket from "./CGVTicket";
import CinemaPolis from "./CinemaPolisTicket";
import XXITicket from "./XXITicket";
import dayjs from "dayjs";

interface Brands {
  xxi: boolean;
  cgv: boolean;
  cinemapolis: boolean;
}
interface Movie {
  brands: Brands;
  duration: string;
}
interface MovieData {
  movie: Movie;
}
const startTimes = {
  regular: "09:00",
  golden: "12:00",
  velvet2D: "15:00",
};

const breakDurations = {
  regular: 30,
  golden: 75,
  velvet2D: 60,
};

const convertDurationToMinutes = (duration: string): number => {
  const hoursMatch = duration.match(/(\d+)\s*hours?/);
  const minutesMatch = duration.match(/(\d+)\s*min/);

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours * 60 + minutes;
};

const generateShowtimes = (
  movieDuration: number,
  ticketType: keyof typeof breakDurations
) => {
  const times: string[] = [];
  let startTime = dayjs()
    .startOf("day")
    .hour(Number(startTimes[ticketType].split(":")[0]))
    .minute(0);
  const breakDuration = breakDurations[ticketType];

  while (startTime.hour() < 22) {
    times.push(startTime.format("HH:mm"));
    startTime = startTime
      .add(movieDuration, "minute")
      .add(breakDuration, "minute");

    if (
      (ticketType === "golden" || ticketType === "velvet2D") &&
      times.length >= 5
    ) {
      break;
    }
  }

  return times;
};

const CategoryTicket: React.FC<MovieData> = ({ movie }) => {
  const movieDuration = convertDurationToMinutes(movie.duration);

  return (
    <Stack gap="44px">
      {movie.brands.cgv && (
        <CGVTicket
          regularTime={generateShowtimes(movieDuration, "regular")}
          goldenTime={generateShowtimes(movieDuration, "golden")}
          velvet2DTime={generateShowtimes(movieDuration, "velvet2D")}
        />
      )}
      {movie.brands.cinemapolis && <CinemaPolis />}
      {movie.brands.xxi && <XXITicket />}
    </Stack>
  );
};
export default CategoryTicket;
