import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/Auth/Auth';
import navChange from './Slices/navChange/showNav';
import cartSlice from  './Slices/shoppList/shopCard'
const store=configureStore({
    reducer:{
       auth:authSlice,
        nav:navChange,
        cartSlice
    }
})
export default store