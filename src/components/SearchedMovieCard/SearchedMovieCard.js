import React from "react";
import { movie_image_URL } from "../../utils/constants";
import "./SearchedMovieCard.css";

const SearchedMovieCard = ({
  title,
  poster,
  date,
  overview,
  handleAddClick,
  handleRemove,
  favourite,
}) => {
  return (
    <div className="container">
      <div className="img-container">
        <img
          className="poster-img"
          src={movie_image_URL + poster}
          alt="movie-image"
        />
      </div>
      <div className="contents">
        <h2>{title}</h2>
        <p>{overview}</p>
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <h5>Release Date : {date}</h5>
          {favourite ? (
            <button onClick={handleRemove} className="sub-btn">
              -
            </button>
          ) : (
            <button onClick={handleAddClick} className="add-btn">
              +
            </button>
          )}
          <span className="fav-span">
            {favourite ? "Remove from Favourites" : "Add to Favourites"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchedMovieCard;
