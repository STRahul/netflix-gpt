import {createSlice}  from '@reduxjs/toolkit';

const AppSlice = createSlice({
    name:'app',
    initialState: {
        lang: 'en'
    },
    reducers:{
        changeLang: (state,action)=>{
            state.lang = action.payload
        }
    }
})

export const {changeLang} = AppSlice.actions;

export default AppSlice.reducer;