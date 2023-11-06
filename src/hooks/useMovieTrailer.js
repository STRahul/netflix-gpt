import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/MovieSlice";

export const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movie.trailerVideo);

    useEffect(()=>{
        getMovieVideos();
    },[])

    async function getMovieVideos(){
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results?.filter(video=>video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        if(!trailerVideo) dispatch(addTrailerVideo(trailer));
    }
}