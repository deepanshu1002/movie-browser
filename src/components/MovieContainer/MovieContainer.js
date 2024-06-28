import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieContainer.css";

const MovieContainer = ({ title, data }) => {
  return (
    <div className="movie-container">
      <h1>{title}</h1>
      <div className="movie-list-container">
        {data.map((item) => (
          <MovieCard
            key={item.id}
            name={item.original_title}
            posterPath={item.poster_path}
            releaseDate={item.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
