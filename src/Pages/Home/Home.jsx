import React from 'react'
import Button from '../../Components/Button/Button'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>CINEDEV</h1>
      <Button text="Login" onClick={<Link to='../Login/Login.jsx'/>}/>
      <Button text="Registrar"onClick={<Link to='../Register/Register.jsx'/>}/>
    </div>
  )
}

export default Home