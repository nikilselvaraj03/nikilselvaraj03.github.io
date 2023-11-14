import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState:{
    currentTheme:'light-css'},
    reducers:{
        toggleTheme:(state)=>{
            console.log('calledToggle')
            state.currentTheme =  state.currentTheme === 'light-css' ? 'dark-css' : 'light-css' 
        }
    }
})
export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer;