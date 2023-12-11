import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../store/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.app.lang);
  const searchTxt = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adultfalse&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();
    const text = searchTxt.current.value;
    if (text.trim().length === 0) return;

    const gptQuery =
      "Act as a movie Recomendation system and suggestsome movie for the query: " +
      text +
      " only give me name of 5 movies, comma seperated like the  example result given ahead.Example Result: Gadar, Tiger 3,Don,Golmaal,OMG";

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptresults.choices) {
      const gptMovies = gptresults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovies({movieNames: gptMovies,movieResults:tmdbResults}));
    }
  };

  return (
    <div className="pt-[30%] sm:pt-[25%] lg:pt-[12%] flex justify-center">
      <form
        className="lg:w-1/2 max-[480px]:w-full bg-black bg-opacity-70 grid grid-cols-12 rounded-lg"
        onSubmit={handleGptSearch}
      >
        <input
          ref={searchTxt}
          className="col-span-9 p-2 sm:p-4 my-6 ml-4 sm:m-4 outline-none rounded-lg sm:text-lg border focus:border-sky-900"
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          name="search"
        />
        <button className="col-span-3 p-2 sm:p-4 my-6 mx-3 sm:m-4 bg-red-600 text-white sm:text-lg rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
