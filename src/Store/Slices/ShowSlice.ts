import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";


interface showState {
  showTimes: string | null;
  showPrice: string | null;
  showType: string | null;
  theaterName: string | null;
  location: string | null;
}

const initialState: showState = {
  showTimes: null,
  showPrice: null,
  showType: null,
  theaterName: null,
  location: null,
};

const ShowSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    selectShows: (
      state,
      action: PayloadAction<{
        type: string;
        price: string;
        time: string;
        theaterName: string;
        location: string;
      }>
    ) => {
      state.showTimes = action.payload.time;
      state.showPrice = action.payload.price;
      state.showType = action.payload.type;
      state.theaterName = action.payload.theaterName;
      state.location = action.payload.location;
    },
  },
});

export const { selectShows } = ShowSlice.actions;
export const selectedShow = (state: RootState) => state.shows;

export default ShowSlice.reducer;
