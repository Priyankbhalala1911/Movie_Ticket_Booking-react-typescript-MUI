import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  location: string;
  brand: string;
  cinema: string;
  news: string;
}

const initialState: FilterState = {
  location: "Ahmedabad",
  brand: "XXI",
  cinema: "",
  news: "spotlight",
};
const FilterSlice = createSlice({
  name: "FilterTheater",
  initialState,
  reducers: {
    UpdatedFilter: (
      state,
      action: PayloadAction<{ key: keyof FilterState; value: string }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    UpdatedCinema: (state, action: PayloadAction<string>) => {
      state.cinema = action.payload;
    },
  },
});
export const { UpdatedFilter, UpdatedCinema } = FilterSlice.actions;

export default FilterSlice.reducer;
