import React from "react";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import VideoDetails from "../VideoDetails/videoDetails";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlaying);

  const movie = nowPlaying[0];

  if (!movie) return;
  const { id, original_title, overview } = movie;

  return (
    <div className="main-container">
      <BackgroundVideo movieId={id} />
      <VideoDetails title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
