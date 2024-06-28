import axios from "axios";
import React, { useEffect, useState } from "react";

const useMovieSearch = (movieName, pageNumber, filter) => {
  const { genre, releaseDate, rating } = filter;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setMovies([]);
  }, [movieName, filter]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url:
        movieName === ""
          ? "https://api.themoviedb.org/3/discover/movie"
          : "https://api.themoviedb.org/3/search/movie",
      params: {
        query: movieName,
        page: pageNumber,
        language: "en-US",
        with_genres: genre,
        "vote_average.gte": rating,
        "release_date.gte": releaseDate,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTc5M2QzODQwNjA4NDdjN2Y2MGRkNjMwMGViNDcwNSIsInN1YiI6IjY2MDJiMDk3NDU5YWQ2MDE0YWY4Mjc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EMN_AmVRsWxBEgeMZJ_u1iDAeabL0gnz28hEGYNhVk",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovies((prev) => {
          return [...new Set([...prev, ...res.data.results])];
        });
        setHasMore(res.data.results.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [movieName, pageNumber, filter]);
  return { loading, error, movies, hasMore };
};

export default useMovieSearch;
