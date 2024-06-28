import React, { useEffect } from "react";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import { API_OPTION } from "../../utils/options";
import useMovieList from "../../hooks/useMovieList";

const Browse = () => {
  useMovieList();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
