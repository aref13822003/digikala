import { createSlice } from "@reduxjs/toolkit";
const initialState={
    navBar:true
}
const navChange=createSlice({
    name:"navChange",
    initialState,
    reducer:{
        hideNav:(state)=>{
            state.navBar=false
        },
       showNav:(state)=>{
            state.navBar=true       }
    }
})

export const {hideNav,showNav}=navChange.actions
export default navChange.reducer