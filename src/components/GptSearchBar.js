import React from "react";
import { useSelector } from "react-redux";
import {lang} from '../utils/languageConstants';
const GptSearchBar = () => {
   const langKey = useSelector(store=>store.app.lang)
  return (
    <div className="pt-[40%] sm:pt-[25%] lg:pt-[12%] flex justify-center">
      <form className="lg:w-1/2 bg-black bg-opacity-70 grid grid-cols-12 rounded-lg">
        <input
          className="col-span-8 sm:col-span-9 p-4 m-4 outline-none rounded-lg sm:text-lg border focus:border-sky-900"
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          name="search"
        />
        <button className="col-span-4 sm:col-span-3 p-4 m-4 bg-red-600 text-white sm:text-lg rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
