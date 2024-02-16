import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShoppingList from './Pages/ShoppingCard'
import Auth from './Pages/Auth'
import { UseSelector, useSelector } from 'react-redux'
export default function App() {
  let hidNav=false
  const {navBar}=useSelector((state)=>state.nav)
  return (
  
 <>
 {navBar&&<Navbar />}

 
 <Routes>
  
<Route exact path='/' element={<Home/>}></Route>
<Route  path='/shopping-list' element={<ShoppingList/>}></Route>
<Route  path='/login-register' element={<Auth/>}></Route>
 </Routes>
 
 
 
 
 </>
  )
}
