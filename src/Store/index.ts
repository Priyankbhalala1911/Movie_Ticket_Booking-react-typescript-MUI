import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slices/MovieSlice";
import seatSlice from "./Slices/SeatSlice";
import showSlice from "./Slices/ShowSlice";
import filterSlice from "./Slices/FilterSlice";
import authSlice from "./Slices/AuthSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shows", "seats", "movies"],
};

const rootReducer = combineReducers({
  movies: movieSlice,
  seats: seatSlice,
  shows: showSlice,
  filterTheater: filterSlice,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
