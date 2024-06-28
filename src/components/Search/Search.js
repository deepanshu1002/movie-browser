import React, { useEffect, useState } from "react";
import { background_image } from "../../utils/constants";
import "./Search.css";
import { API_OPTION } from "../../utils/options";
import { useSelector } from "react-redux";
import SearchedMovieList from "../SearchedMoviesList/SearchedMovieList";
import { ratings } from "../../utils/constants";

const Search = () => {
  const [filter, setFilter] = useState({
    genre: "",
    releaseDate: "",
    rating: "",
  });
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");
  const [page, setPage] = useState(1);
  const [showSuggestion, setShowSuggestion] = useState(true);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const genresData = useSelector((store) => store.genres);
  const handleSearch = () => {
    setMovie(input);
    setPage(1);
    setShowSuggestion(false);
  };
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        input +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    setData(json.results);
  };
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      fetchMovies();
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  const handleFilter = (e) => {
    const id = e.target.id;
    const value = id === "rating" ? parseInt(e.target.value) : e.target.value;
    setFilter({ ...filter, [id]: value });
    setInput("");
  };
  useEffect(() => {
    handleSearch();
  }, [filter]);
  return (
    <div className="search-container">
      <div className="filter-range">
        <label htmlFor="genre">Genre</label>
        <select onChange={handleFilter} id="genre">
          {genresData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor="rating">Ratings</label>
        <select onChange={handleFilter} id="rating">
          {ratings.map((rating) => (
            <option key={rating} value={parseInt(rating[0])}>
              {rating}
            </option>
          ))}
        </select>
        <label htmlFor="releaseDate">Movies Release After</label>
        <input
          onChange={handleFilter}
          id="releaseDate"
          type="date"
          placeholder="Release Year"
          x
        />
      </div>
      <img className="bg-image" src={background_image} alt="bg-image" />
      <div className="search-bar">
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Search for movies here..."
          onFocus={() => setShowSuggestion(true)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {data.length > 0 && showSuggestion && (
        <div className="suggestion-box">
          {data.map((item) => (
            <div key={item.id} className="suggestions">
              <h6 onClick={(e) => setInput(e.target.innerText)}>
                {item.original_title}
              </h6>
            </div>
          ))}
        </div>
      )}

      <SearchedMovieList
        name={movie}
        page={page}
        setPage={setPage}
        filter={filter}
      />
    </div>
  );
};

export default Search;
