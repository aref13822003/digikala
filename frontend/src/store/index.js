import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/Auth/Auth'
import navChange from './Slices/navChange/showNav'
const store=configureStore({
    reducer:{
       auth:authSlice,
        nav:navChange,
    }
})
export default store