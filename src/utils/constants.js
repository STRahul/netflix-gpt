export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const IMG_URL =
  "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIE =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const POPULAR_MOVIE =
  "https://api.themoviedb.org/3/movie/popular?&page=1";
export const TOP_RATED_MOVIE =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const UPCOMING_MOVIE =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en",name:'English'},
  {identifier: "hindi",name:'Hindi'},
  {identifier: "spanish",name:'Spanish'}
]