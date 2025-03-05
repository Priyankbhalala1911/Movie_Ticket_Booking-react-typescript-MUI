import { Stack } from "@mui/material";
import CGVTicket from "./CGVTicket";
import CinemaPolis from "./CinemaPolisTicket";
import XXITicket from "./XXITicket";
import dayjs from "dayjs";

const generateShowtimes = (movieDuration: number, breakTime: number) => {
  const times: string[] = [];
  let startTime = dayjs().startOf("day");

  while (startTime.hour() < 23) {
    times.push(startTime.format("HH:mm"));
    startTime = startTime.add(movieDuration, "minute").add(breakTime, "minute");
  }

  return times;
};

const CategoryTicket: React.FC = () => {
  const movieDuration = 148;
  const breakTime = 30;

  const showtimes = generateShowtimes(movieDuration, breakTime);

  return (
    <>
      <Stack gap="44px">
        <CGVTicket showTime={showtimes} />
        <CinemaPolis />
        <XXITicket />
      </Stack>
    </>
  );
};
export default CategoryTicket;
