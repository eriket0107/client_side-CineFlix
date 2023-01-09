import { Route, Routes } from "react-router-dom";

import{ Home } from '../pages/Home'
import{ Details } from '../pages/Details'
import{ Profile } from '../pages/Profile'
import{ NewMovie } from '../pages/NewMovie'

export function AppRoutes(){
  return(
    <Routes>
      <Route element={<Home/>} path={'/'}/>
      <Route element={<Profile/>} path={'/profile'}/>
      <Route element={<NewMovie/>} path={'/newMovie'}/>
      <Route element={<Details/>} path={'/details/:id'}/>
    </Routes>
  )
}