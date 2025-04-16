declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png";
declare module "*.css";

export interface Seat {
  id: string;
  seat_number: string;
  Row_number: string;
  status: string;
}
export interface ShowTime {
  id: string;
  Time: string;
  Price: number;
  seats: Seat[];
}
export interface Screen {
  id: string;
  type: string;
  show_times: ShowTime[];
}
export interface Theatre {
  id: string;
  name: string;
  location: string;
  chain: string;
  screens: Screen[];
}
export interface Day {
  id: string;
  day: number;
  theatres: Theatre[];
}
export interface City {
  id: string;
  name: string;
  days: Day[];
}
export interface Movie {
  movie_id: string;
  title: string;
  movie_poster: string;
  director: string;
  duration: string;
  genre: string;
  rating: string;
  cities: City[];
}
