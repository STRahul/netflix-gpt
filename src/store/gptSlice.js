import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false
    },
    reducers:{
        ToggleGptSearch: (state)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { ToggleGptSearch } = GptSlice.actions;

export default GptSlice.reducer