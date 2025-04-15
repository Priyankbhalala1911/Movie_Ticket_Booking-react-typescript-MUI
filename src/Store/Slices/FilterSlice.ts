import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  location: string;
  brand: string;
  type: string;
  cinema: string;
  news: string;
  postName: string;
}

const initialState: FilterState = {
  location: "",
  brand: "",
  type: "",
  cinema: "",
  news: "spotlight",
  postName: "",
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
    UpdatedPostName: (state, action: PayloadAction<string>) => {
      state.postName = action.payload;
    },
  },
});
export const { UpdatedFilter, UpdatedCinema, UpdatedPostName } =
  FilterSlice.actions;

export default FilterSlice.reducer;
