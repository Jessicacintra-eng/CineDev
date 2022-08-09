import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Profile from './Pages/ClientArea/ClientArea'
import Films from './Pages/Films/Films'
import Planos from './Pages/Planos/Planos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/planos/:id' element={<Planos />} />
        <Route path='/clientArea/:id' element={<Profile />} />
        <Route path='/films' element={<Films/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes