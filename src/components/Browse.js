import React from "react";
import { useMovies } from "../hooks/useMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  NOW_PLAYING_MOVIE,
  POPULAR_MOVIE,
  TOP_RATED_MOVIE,
  UPCOMING_MOVIE,
} from "../utils/constants";
const Browse = () => {
  useMovies({ category: "Now Playing", url: NOW_PLAYING_MOVIE });
  useMovies({ category: "Popular", url: POPULAR_MOVIE });
  useMovies({ category: "Top Rated", url: TOP_RATED_MOVIE });
  useMovies({ category: "Upcoming", url: UPCOMING_MOVIE });

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
