import React from "react";
import { movie_image_URL } from "../../utils/constants";
import "./MovieCard.css";

const MovieCard = ({ name, posterPath, releaseDate }) => {
  return (
    <div className="movie-card-container">
      <img
        className="movie-img"
        src={movie_image_URL + posterPath}
        alt="poster_img"
      />
      <h5>{name}</h5>
      <h6> {releaseDate.split("").slice(0, 4).join("")}</h6>
    </div>
  );
};

export default MovieCard;
