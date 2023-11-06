import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies, addUpcomingMovies } from "../utils/MovieSlice";

export const useMovies = ({category,url}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const data = await fetch(
      url,
      API_OPTIONS
    );
    const json = await data.json();

    if(category === 'Now Playing') {
      dispatch(addNowPlayingMovies(json?.results));
    }
    if(category === 'Popular') {
      dispatch(addPopularMovies(json?.results));
    }
    if(category === 'Top Rated') {
      dispatch(addTopRatedMovies(json?.results));
    }
    if(category === 'Upcoming') {
      dispatch(addUpcomingMovies(json?.results));
    }
  }
};
