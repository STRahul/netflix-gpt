import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        movieresults:null,
        movieNames: null
    },
    reducers:{
        ToggleGptSearch: (state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovies: (state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieresults = movieResults;
            state.movieNames = movieNames;
        }
    }
})

export const { ToggleGptSearch, addGptMovies } = GptSlice.actions;

export default GptSlice.reducer