import React, { useState } from "react";
import logo from "../../images/movie-logo.png";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FavouriteMovies from "../FavouriteMovies/FavouriteMovies";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [favClicked, setFavClicked] = useState(false);
  const handleClick = () => {
    if (location.pathname === "/") navigate("/search");
    else {
      navigate("/");
      setFavClicked(false);
    }
  };
  if (!localStorage.getItem("favourites")) {
    localStorage.setItem("favourites", JSON.stringify([]));
  }
  const handleFavClick = () => {
    if (location.pathname === "/search") {
      navigate("/favourites");
      setFavClicked(true);
    } else {
      navigate("/search");
      setFavClicked(false);
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="title" onClick={() => setFavClicked(false)}>
            <img className="logo" src={logo} alt="app-logo" />
            <span>Movie Browser</span>
          </div>
        </Link>
        <div className="right-section">
          {location.pathname === "/search" ||
          location.pathname === "/favourites" ? (
            <button onClick={handleFavClick} className="btn">
              {favClicked ? "Back" : "My Favourite Movies"}
            </button>
          ) : null}
          <div className="search">
            <button onClick={handleClick}>
              {location.pathname === "/search" ||
              location.pathname === "/favourites"
                ? "Back to home"
                : "Movie Search"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
