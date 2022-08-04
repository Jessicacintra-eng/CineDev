import React from 'react'
import Button from '../../Components/Button/Button'
import {Link} from 'react-router-dom'
import Plans from '../../Components/Planos/Plans'

const Home = () => {
  return (
    <div>
      
      <h1>CINEDEV</h1>
      <Link to='../Login'>Login</Link>
      <Link to='../Register'>Cadastre-se</Link>
      {/* <Plans /> */}
    </div>
  )
}

export default Home