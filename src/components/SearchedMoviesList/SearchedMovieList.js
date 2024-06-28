import React, { useCallback, useRef, useState } from "react";
import "./SearchedMovieList.css";
import SearchedMovieCard from "../SearchedMovieCard/SearchedMovieCard";
import useMovieSearch from "../../hooks/useMovieSearch";
import useGenres from "../../hooks/useGenres";

const SearchedMovieList = ({ name, page, setPage, filter }) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites"))
  );
  const { movies, hasMore, loading, error } = useMovieSearch(
    name,
    page,
    filter
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
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  useGenres();
  return (
    <div className="search-movie-container">
      {movies.map((item, index) => {
        if (movies.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={item.id}>
              <SearchedMovieCard
                handleAddClick={() => onAddClick(item)}
                handleRemove={() => onRemoveClick(item)}
                title={item.original_title}
                overview={item.overview}
                date={item.release_date}
                poster={item.poster_path}
                favourite={favourites.includes(item.id) ? true : false}
              />
            </div>  
          );
        } else {
          return (
            <div key={item.id}>
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
          );
        }
      })}
    </div>
  );
};

export default SearchedMovieList;
