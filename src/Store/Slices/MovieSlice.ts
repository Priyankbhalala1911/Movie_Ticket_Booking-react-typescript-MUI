import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { FormattedDate } from "../../Utils";
import { MovieData } from "../../Data/MovieData";

const today = new Date();

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

interface MovieState {
  selectedMovie: Movie | null;
  selectedDate: string;
}

const initialState: MovieState = {
  selectedMovie: null,
  selectedDate: FormattedDate(today),
};
const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    selectMovie: (state, action: PayloadAction<number>) => {
      state.selectedMovie =
        MovieData.find((movie) => movie.id === action.payload) || null;
    },

    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { selectMovie, selectDate } = MovieSlice.actions;
export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie;

export default MovieSlice.reducer;
