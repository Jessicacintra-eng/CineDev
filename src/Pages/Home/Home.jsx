import React, {useState} from 'react'
import Button from '../../Components/Button/Button'
import {Link} from 'react-router-dom'
import Animacao from '../../Components/Animacao/Animacao'
import { useEffect } from 'react'

const Home = () => {

  // Remove a animação do home
  const [removeLoading, setRemoveLoading] = useState(false)

  //Configuração do tempo
  useEffect(() => {
   setTimeout(() => {
      setRemoveLoading(true)
   }, 5000) 
  })

  return(
      <div>

        {/* Condicional para que apareça na tela */}
        {!removeLoading && <Animacao />}

        <h1>CINEDEV</h1>
        <Button text="Login" onClick={<Link to='../Login/Login.jsx'/>}/>
        <Button text="Registrar"onClick={<Link to='../Register/Register.jsx'/>}/>
      </div>
  ) 
}

export default Home