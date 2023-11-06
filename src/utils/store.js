import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";

const store = configureStore({
  reducer:{
      user: UserSlice,
      movie: MovieSlice
  }
})

export default store;