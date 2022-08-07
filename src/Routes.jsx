import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Profile from './Pages/ClientArea/ClientArea'
import Films from './Pages/Films/Films'



const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/clientArea/:id' element={<Profile />} />
        <Route path='/films' element={<Films />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes