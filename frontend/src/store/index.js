import { configureStore } from "@reduxjs/toolkit";

import navChange from './Slices/navChange/showNav'
const store=configureStore({
    reducer:{
       
        nav:navChange,
    }
})
export default store