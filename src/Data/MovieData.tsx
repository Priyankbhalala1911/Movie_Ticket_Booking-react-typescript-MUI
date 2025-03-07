import { Ghostbusters, HouseOfGucci, Spiderman, YowisBen } from "../assets";

interface Brands {
  xxi: boolean;
  cgv: boolean;
  cinemapolis: boolean;
}

interface Movie {
  id: number;
  image: string;
  title: string;
  brands: Brands;
  genre: string;
  duration: string;
  director: string;
  rating: string;
}

export const MovieData: Movie[] = [
  {
    id: 1,
    image: Spiderman,
    title: "Spider-Man: No Way Home",
    brands: { xxi: true, cgv: true, cinemapolis: true },
    genre: "Action",
    duration: "2 hours 28 min",
    director: "Jon Watts",
    rating: "SU",
  },
  {
    id: 2,
    image: YowisBen,
    title: "Yowis Ben Finale",
    brands: { xxi: true, cgv: true, cinemapolis: true },
    genre: "Comedy, Drama",
    duration: "1 hour 53 min",
    director: "Fajar Nugros",
    rating: "PG-13",
  },
  {
    id: 3,
    image: Ghostbusters,
    title: "Ghostbusters: Afterlife",
    brands: { xxi: true, cgv: true, cinemapolis: false },
    genre: "Action, Adventure, Comedy",
    duration: "2 hours 4 min",
    director: "Jason Reitman",
    rating: "PG-13",
  },
  {
    id: 5,
    image: HouseOfGucci,
    title: "House of Gucci",
    brands: { xxi: true, cgv: true, cinemapolis: true },
    genre: "Biography, Crime, Drama",
    duration: "2 hours 38 min",
    director: "Ridley Scott",
    rating: "R",
  },
];
