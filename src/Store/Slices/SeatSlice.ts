import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedSeat {
  id: string;
  seat_number: string;
}

interface SeatState {
  selectedSeat: SelectedSeat[];
}

const initialState: SeatState = {
  selectedSeat: [],
};

const seatSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    selectSeat: (state, action: PayloadAction<SelectedSeat[]>) => {
      state.selectedSeat = action.payload;
    },
    clearSeat: (state) => {
      state.selectedSeat = [];
    },
  },
});

export const { selectSeat, clearSeat } = seatSlice.actions;
export default seatSlice.reducer;
