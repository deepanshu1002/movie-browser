import { createSlice } from "@reduxjs/toolkit";

const genres = createSlice({
  name: "genres",
  initialState: [],
  reducers: {
    addGenres: (state, action) => {
      return action.payload;
    },
  },
});
export const { addGenres } = genres.actions;
export default genres.reducer;
