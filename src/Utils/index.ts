import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export const getOrCreateSessionId = (): string => {
  let sessionId = sessionStorage.getItem("sessionId");
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem("sessionId", sessionId);
  }
  return sessionId;
};

export const clearSessionId = () => {
  sessionStorage.removeItem("sessionId");
};

export const hasSession = (): boolean => {
  return !!sessionStorage.getItem("sessionId");
};

export const convertDurationToMinutes = (duration: string): number => {
  const hoursMatch = duration.match(/(\d+)\s*hours?/);
  const minutesMatch = duration.match(/(\d+)\s*min/);

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours * 60 + minutes;
};

export const FormattedDate = (date: Date): string => {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const generateShowtimes = (startTime: string, Duration: number) => {
  const showtimes: string[] = [];
  const movieDuration = Duration;
  const breakTime = 60;

  let currentTime = dayjs()
    .hour(Number(startTime.split(":")[0]))
    .minute(Number(startTime.split(":")[1] || "0"));

  const endOfDay = dayjs().hour(23).minute(59);

  while (currentTime.isBefore(endOfDay)) {
    showtimes.push(currentTime.format("HH:mm"));
    currentTime = currentTime.add(movieDuration + breakTime, "minute");
  }

  return showtimes;
};

export const getCurrentDay = (date: string) => {
  const getDate = new Date(date);
  const currentDate = new Date();

  getDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const diffrenceDays =
    (getDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
  return diffrenceDays + 1;
};
