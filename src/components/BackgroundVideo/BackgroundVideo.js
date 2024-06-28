import React, { useEffect } from "react";
import useTrailer from "../../hooks/useTrailer";
import { useSelector } from "react-redux";
import "./BackgroundVideo.css";

const BackgroundVideo = ({ movieId }) => {
  useTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailer);

  return (
    <div className="bg-video-container">
      <iframe
        className="iframe"
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
