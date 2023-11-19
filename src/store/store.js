import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../reducers/themeSlice';
import experienceReducer from '../reducers/experienceSlice'
export const store = configureStore({reducer:{theme:themeReducer,experience:experienceReducer}})