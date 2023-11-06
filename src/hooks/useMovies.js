import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies, addUpcomingMovies } from "../store/MovieSlice";

export const useMovies = ({category,url}) => {
  const dispatch = useDispatch();
  const movies = useSelector(store=>store.movie);
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
     if(!movies.nowPlayingMovies) dispatch(addNowPlayingMovies(json?.results));
    }
    if(category === 'Popular') {
     if(!movies.popularMovies) dispatch(addPopularMovies(json?.results));
    }
    if(category === 'Top Rated') {
     if(!movies.topRatedMovies) dispatch(addTopRatedMovies(json?.results));
    }
    if(category === 'Upcoming') {
     if(!movies.upcomingMovies) dispatch(addUpcomingMovies(json?.results));
    }
  }
};
