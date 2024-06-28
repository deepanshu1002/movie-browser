import React from "react";
import "./videoDetails.css";

const VideoDetails = ({ title, overview }) => {
  return (
    <div className="movie-details-container">
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
};

export default VideoDetails;
