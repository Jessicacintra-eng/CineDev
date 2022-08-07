import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Ticket from "../../assets/Entrar.svg";
import s from "./Home.module.css";
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

  return (
    
    <section>
    {/* Condicional para que apareça na tela */}
      {!removeLoading && <Animacao />}
    <section className={s.stars}>
    </section>
      <section className={s.home}>
        <img src={Logo} className={s.logo} alt="" />
          <Link to="/login" className={s.LinkLogin}>
            <img src={Ticket} className={s.imageTicket} alt="" />
            <p className={s.textTickets}>
            Login
            </p>
          </Link>

          <Link to="/cadastro" className={s.LinkCadastrar}>
            <img src={Ticket} className={s.imageTicket} alt="" />
            <p className={s.textTickets}>
            Cadastre-se
            </p>
          </Link>
      </section>
    </section>
  );
};

export default Home;
