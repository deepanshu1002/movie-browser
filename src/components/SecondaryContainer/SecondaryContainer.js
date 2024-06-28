import React from "react";
import { useSelector } from "react-redux";
import MovieContainer from "../MovieContainer/MovieContainer";
import "./SecondaryContainer.css";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlaying);
  const popular = useSelector((store) => store.movies?.popular);
  const topRated = useSelector((store) => store.movies?.topRated);
  const upcoming = useSelector((store) => store.movies?.upcoming);

  return (
    <div className="secondary-container">
      <MovieContainer title="Now Playing" data={nowPlaying} />
      <MovieContainer title="Popular" data={popular} />
      <MovieContainer title="Top Rated" data={topRated} />
      <MovieContainer title="Upcoming" data={upcoming} />
    </div>
  );
};

export default SecondaryContainer;
