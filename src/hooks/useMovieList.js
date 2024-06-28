import { useDispatch } from "react-redux";
import {
  addNowPlaying,
  addPopular,
  addTopRated,
  addUpcoming,
} from "../utils/movieSlice";
import { API_OPTION } from "../utils/options";
import { useEffect } from "react";

const useMovieList = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTION
    );
    const json = await res.json();
    dispatch(addNowPlaying(json.results));
  };
  const getPopular = async () => {
    const res = await fetch(
      " https://api.themoviedb.org/3/movie/popular",
      API_OPTION
    );
    const json = await res.json();
    dispatch(addPopular(json.results));
  };
  const getTopRated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTION
    );
    const json = await res.json();
    dispatch(addTopRated(json.results));
  };
  const getUpcoming = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTION
    );
    const json = await res.json();
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    getNowPlaying();
    getPopular();
    getTopRated();
    getUpcoming();
  }, []);
};
export default useMovieList;
