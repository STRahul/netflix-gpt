import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie.trailerVideo);
  return (
    <div className="w-screen">
      <iframe
        className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
