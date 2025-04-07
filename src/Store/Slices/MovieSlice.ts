import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { FormattedDate } from "../../Utils";

const today = new Date();

interface MovieState {
  selectedMovie: string | null;
  selectedDate: string;
  selectedMovieId: string | null;
}

const initialState: MovieState = {
  selectedMovie: "",
  selectedDate: FormattedDate(today),
  selectedMovieId: null,
};
const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    selectMovie: (state, action: PayloadAction<string>) => {
      state.selectedMovie = action.payload;
    },
    selecteMovieId: (state, action: PayloadAction<string>) => {
      state.selectedMovieId = action.payload;
    },

    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { selectMovie, selectDate, selecteMovieId } = MovieSlice.actions;
export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie;

export default MovieSlice.reducer;
