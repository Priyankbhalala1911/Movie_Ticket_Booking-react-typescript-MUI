import { Ghostbusters, HouseOfGucci, Spiderman, YowisBen } from "../assets";

interface Brands {
  XXI: boolean;
  CGV: boolean;
  Cinepolis: boolean;
}

interface Show {
  type: string;
  price: string;
  times: string[];
}

interface Theater {
  id: number;
  name: string;
  location: string;
  brand: string;
  shows: Show[];
}

interface Movie {
  id: number;
  image: string;
  title: string;
  genre: string;
  brands: Brands;
  duration: string;
  director: string;
  rating: string;
  theaters: Theater[];
}

export const MovieData: Movie[] = [
  {
    id: 1,
    image: Spiderman,
    title: "Spider-Man: No Way Home",
    brands: { XXI: true, Cinepolis: true, CGV: true },
    genre: "Action",
    duration: "2 hours 28 min",
    director: "Jon Watts",
    rating: "SU",
    theaters: [
      {
        id: 1,
        name: "GRAND INDONESIA CGV",
        location: "Surat",
        brand: "CGV",
        shows: [
          {
            type: "REGULAR 2D",
            price: "45.000",
            times: [
              "02:00",
              "05:00",
              "08:00",
              "11:00",
              "14:00",
              "17:00",
              "21:00",
            ],
          },
          {
            type: "GOLD CLASS 2D",
            price: "100.000",
            times: ["07:00", "10:00", "13:00"],
          },
          {
            type: "VELVET 2D",
            price: "100.000",
            times: ["09:00", "12:00", "15:00"],
          },
        ],
      },
      {
        id: 2,
        name: "MANGGO TWO SQUARE CINEMAPOLIS",
        location: "Ahmedabad",
        brand: "Cinepolis",
        shows: [
          {
            type: "2D",
            price: "30.000",
            times: ["09:30", "12:30", "15:30"],
          },
        ],
      },
      {
        id: 3,
        name: "PLAZA INDONESIA XXI",
        location: "Surat",
        brand: "XXI",
        shows: [
          {
            type: "2D",
            price: "50.000",
            times: ["11:00", "14:00", "17:00"],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    image: YowisBen,
    title: "Yowis Ben Finale",
    brands: { XXI: true, Cinepolis: true, CGV: true },
    genre: "Comedy, Drama",
    duration: "1 hour 53 min",
    director: "Fajar Nugros",
    rating: "PG-13",
    theaters: [
      {
        id: 1,
        name: "GRAND INDONESIA CGV",
        location: "Rajkot",
        brand: "CGV",
        shows: [
          {
            type: "REGULAR 2D",
            price: "45.000",
            times: [
              "02:00",
              "05:00",
              "08:00",
              "11:00",
              "14:00",
              "17:00",
              "21:00",
            ],
          },
          {
            type: "GOLD CLASS 2D",
            price: "100.000",
            times: ["07:00", "10:00", "13:00"],
          },
          {
            type: "VELVET 2D",
            price: "100.000",
            times: ["09:00", "12:00", "15:00"],
          },
        ],
      },
      {
        id: 2,
        name: "MANGGO TWO SQUARE CINEMAPOLIS",
        location: "Surat",
        brand: "Cinepolis",
        shows: [
          {
            type: "2D",
            price: "30.000",
            times: ["09:30", "12:30", "15:30"],
          },
        ],
      },
      {
        id: 3,
        name: "PLAZA INDONESIA XXI",
        location: "Vadodara",
        brand: "XXI",
        shows: [
          {
            type: "2D",
            price: "50.000",
            times: ["11:00", "14:00", "17:00"],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: Ghostbusters,
    title: "Ghostbusters: Afterlife",
    brands: { XXI: true, Cinepolis: false, CGV: true },
    genre: "Action, Adventure, Comedy",
    duration: "2 hours 4 min",
    director: "Jason Reitman",
    rating: "PG-13",
    theaters: [
      {
        id: 1,
        name: "GRAND INDONESIA CGV",
        location: "Navsari",
        brand: "CGV",
        shows: [
          {
            type: "REGULAR 2D",
            price: "45.000",
            times: [
              "02:00",
              "05:00",
              "08:00",
              "11:00",
              "14:00",
              "17:00",
              "21:00",
            ],
          },
          {
            type: "GOLD CLASS 2D",
            price: "100.000",
            times: ["07:00", "10:00", "13:00"],
          },
          {
            type: "VELVET 2D",
            price: "100.000",
            times: ["09:00", "12:00", "15:00"],
          },
        ],
      },
      {
        id: 3,
        name: "PLAZA INDONESIA XXI",
        location: "Rajkot",
        brand: "XXI",
        shows: [
          {
            type: "2D",
            price: "50.000",
            times: ["11:00", "14:00", "17:00"],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    image: HouseOfGucci,
    title: "House of Gucci",
    brands: { XXI: true, Cinepolis: true, CGV: true },
    genre: "Biography, Crime, Drama",
    duration: "2 hours 38 min",
    director: "Ridley Scott",
    rating: "R",
    theaters: [
      {
        id: 1,
        name: "GRAND INDONESIA CGV",
        location: "Bhavnagar",
        brand: "CGV",
        shows: [
          {
            type: "REGULAR 2D",
            price: "45.000",
            times: [
              "02:00",
              "05:00",
              "08:00",
              "11:00",
              "14:00",
              "17:00",
              "21:00",
            ],
          },
          {
            type: "GOLD CLASS 2D",
            price: "100.000",
            times: ["07:00", "10:00", "13:00"],
          },
          {
            type: "VELVET 2D",
            price: "100.000",
            times: ["09:00", "12:00", "15:00"],
          },
        ],
      },
      {
        id: 2,
        name: "MANGGO TWO SQUARE CINEMAPOLIS",
        location: "Ahemadabad",
        brand: "Cinepolis",
        shows: [
          {
            type: "2D",
            price: "30.000",
            times: ["09:30", "12:30", "15:30"],
          },
        ],
      },
      {
        id: 3,
        name: "PLAZA INDONESIA XXI",
        location: "Surat",
        brand: "XXI",
        shows: [
          {
            type: "2D",
            price: "50.000",
            times: ["11:00", "14:00", "17:00"],
          },
        ],
      },
    ],
  },
];
