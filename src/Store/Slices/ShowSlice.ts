import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface showState {
  id: string | null;
  showTimes: string | null;
  showPrice: number | null;
  showType: string | null;
  theaterName: string | null;
  location: string | null;
  date: string | null;
  movie_title: string | null;
}

const initialState: showState = {
  id: null,
  showTimes: null,
  showPrice: null,
  showType: null,
  theaterName: null,
  location: null,
  date: null,
  movie_title: null,
};

const ShowSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    selectShows: (
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        price: number;
        time: string;
        theaterName: string;
        location: string;
        date: string;
        movie_title: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.showTimes = action.payload.time;
      state.showPrice = action.payload.price;
      state.showType = action.payload.type;
      state.theaterName = action.payload.theaterName;
      state.location = action.payload.location;
      state.date = action.payload.date;
      state.movie_title = action.payload.movie_title;
    },
    selectTime: (state, action: PayloadAction<string>) => {
      state.showTimes = action.payload;
    },
    clearSlot: (state) => {
      state.id = null;
      state.showTimes = null;
      state.showPrice = null;
      state.showType = null;
      state.theaterName = null;
      state.location = null;
      state.date = null;
      state.movie_title = null;
    },
  },
});

export const { selectShows, clearSlot, selectTime } = ShowSlice.actions;
export const selectedShow = (state: RootState) => state.shows;

export default ShowSlice.reducer;
