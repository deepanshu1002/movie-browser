import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import genreReducer from "./genreSlice";

const store = configureStore({
  reducer: { movies: movieReducer, genres: genreReducer },
});
export default store;
