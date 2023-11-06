import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MovieReducer from "./MovieSlice";
import GptReducer from './gptSlice';
import appReducer from "./appSlice";

const store = configureStore({
  reducer:{
      user: UserReducer,
      movie: MovieReducer,
      gpt: GptReducer,
      app: appReducer
  }
})

export default store;