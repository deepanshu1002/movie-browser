import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTION } from "../utils/options";
import { useEffect } from "react";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await fetch(
      " https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    );
    const json = await res.json();

    const trailer = json.results.filter((item) => item.type === "Trailer");
    dispatch(addTrailer(trailer[0]));
  };
  useEffect(() => {
    fetchData();
  }, []);
};
export default useTrailer;
