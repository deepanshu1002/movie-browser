import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/options";
import { addGenres } from "../utils/genreSlice";

const useGenres = () => {
  const dispatch = useDispatch();
  const fetchGenres = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      API_OPTION
    );
    const json = await res.json();
    dispatch(addGenres(json.genres));
  };
  useEffect(() => {
    fetchGenres();
  }, []);
};

export default useGenres;
