import React from "react";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-[6%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="sm:text-3xl lg:text-5xl font-bold">{title}</h1>
      <p className="sm:text-lg w-1/2 lg:w-1/3 py-1 line-clamp-1 md:line-clamp-3 lg:line-clamp-none">
        {overview}
      </p>
      <div className="py-1">
        <button className="px-3 py-1 sm:px-8 sm:py-2 bg-white rounded-md sm:text-lg text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="px-3 py-1 sm:px-5 sm:py-2 bg-gray-500 ml-3 rounded-md sm:text-lg bg-opacity-60">
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
