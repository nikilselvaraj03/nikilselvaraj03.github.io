import { createSlice } from "@reduxjs/toolkit";

export const experienceSlice = createSlice({
    name:'experience',
    initialState:{
    selectedCompany:null},
    reducers:{
        toggleCompanySelection:(state,action)=>{
                state.selectedCompany =  action.payload
            }
            
        }
    }
)
export const {toggleCompanySelection} = experienceSlice.actions
export default experienceSlice.reducer;