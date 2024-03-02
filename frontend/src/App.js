import React from 'react'
import Navbar from './Components/Navbar'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShoppingList from './Pages/ShoppingCard'
import Auth from './Pages/Auth'
import { UseSelector, useSelector } from 'react-redux'
import PageNotFound from './Pages/404/PageNotFound'
import TopAppBar from './Components/TopNavBAr'
export default function App() {
  console.log(process.env.REACT_APP_BASE_URL)
  let hidNav=false
  const {navBar}=useSelector((state)=>state.nav)
  return (
  
 <>
 {navBar&&<Navbar />}

 
 <Routes>
  
<Route exact path='/' element={<Home/>}></Route>
<Route  path='/shopping-list' element={<ShoppingList/>}></Route>
<Route  path='/login-register' element={<Auth/>}></Route>

<Route  path='/products/product-details/page-not-build' element={<PageNotFound/>}></Route>
<Route  path='/*' element={<PageNotFound/>}></Route>
 </Routes>
 
 
 
 
 </>
  )
}
