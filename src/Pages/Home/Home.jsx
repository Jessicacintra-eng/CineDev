import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Ticket from "../../assets/Entrar.svg";
import s from "./Home.module.css";


const Home = () => {
  return (
    <section>
    <section className={s.stars}>
    </section>
      <section className={s.home}>
        <img src={Logo} className={s.logo} alt="" />
          <Link to="../Login" className={s.LinkLogin}>
            <img src={Ticket} className={s.imageTicket} alt="" />
            <p className={s.textTickets}>
            Login
            </p>
          </Link>

          <Link to="../Register" className={s.LinkCadastrar}>
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
