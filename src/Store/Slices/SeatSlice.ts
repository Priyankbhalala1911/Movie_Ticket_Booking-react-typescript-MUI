import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MovieState {
  selectedSeat: string[];
}

const initialState: MovieState = {
  selectedSeat: [],
};
const SeatSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    selectSeat: (state, action: PayloadAction<string[]>) => {
      state.selectedSeat = action.payload;
    },
  },
});

export const { selectSeat } = SeatSlice.actions;

export default SeatSlice.reducer;
