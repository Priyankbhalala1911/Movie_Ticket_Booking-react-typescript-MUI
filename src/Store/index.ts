import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slices/MovieSlice";
import SeatSlice from "./Slices/SeatSlice";
import ShowSlice from "./Slices/ShowSlice";
import FilterSlice from "./Slices/FilterSlice";
import AuthSlice from "./Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    seats: SeatSlice,
    shows: ShowSlice,
    filterTheater: FilterSlice,
    auth: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
