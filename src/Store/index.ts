import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slices/MovieSlice";
import SeatSlice from "./Slices/SeatSlice";
import ShowSlice from "./Slices/ShowSlice";
import FilterSlice from "./Slices/FilterSlice";
import AuthSlice from "./Slices/AuthSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ShowSlice);
export const store = configureStore({
  reducer: {
    movies: movieSlice,
    seats: SeatSlice,
    shows: persistedReducer,
    filterTheater: FilterSlice,
    auth: AuthSlice,
  },
});
export const persiste = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
