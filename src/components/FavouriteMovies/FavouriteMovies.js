import React, { useState } from "react";
import "./FavouriteMovies.css";
import Header from "../Header/Header";
import SearchedMovieCard from "../SearchedMovieCard/SearchedMovieCard";

const FavouriteMovies = () => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites"))
  );
  const onAddClick = (item) => {
    const copyFav = [...favourites, item];
    setFavourites([...copyFav]);
    localStorage.setItem("favourites", JSON.stringify(copyFav));
  };
  const onRemoveClick = (item) => {
    const copyFav = favourites.filter((fav) => fav.id !== item.id);
    setFavourites(copyFav);
    localStorage.setItem("favourites", JSON.stringify(copyFav));
  };
  return (
    <div className="fav-mov-container">
      <div className={favourites.length > 0 ? "fav-list" : "no-fav"}>
        {favourites.length > 0 ? (
          favourites.map((item) => (
            <div>
              <SearchedMovieCard
                handleAddClick={() => onAddClick(item)}
                handleRemove={() => onRemoveClick(item)}
                title={item.original_title}
                overview={item.overview}
                date={item.release_date}
                poster={item.poster_path}
                favourite={
                  favourites.map((item) => item.id).includes(item.id)
                    ? true
                    : false
                }
              />
            </div>
          ))
        ) : (
          <h1>You Have Not Selected Any Favourites Yet</h1>
        )}
      </div>
    </div>
  );
};

export default FavouriteMovies;
