import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    topRated: [],
    popular: [],
    upcoming: [],
    trailer: null,
    searchedMovies: [],
    favouriteMovies: [],
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    addFavouriteMovies: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const {
  addNowPlaying,
  addPopular,
  addTopRated,
  addUpcoming,
  addTrailer,
  addSearchedMovies,
  addFavouriteMovies,
  removeFromFavourites,
} = movies.actions;
export default movies.reducer;
