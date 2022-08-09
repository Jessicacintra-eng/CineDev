import React from "react";
import { Link, useParams } from 'react-router-dom'
import s from './Plans.module.css'


const Plans = (props) => {
 
  const { id } = useParams()

  return (
    <section className={s.cards}>
        <h1 className={s.titulo}>{props.tipo}</h1>
        <div className={s.linha1}></div>
        <small>Por:</small>
        <h2 className={s.valor}>{props.valor}</h2>

        <ul>
            <li>🔥 {props.beneficio1}</li>
            <div className={s.linha}></div>
            <li>✨ {props.beneficio2}</li>
        </ul>

        <div className={s.contButton}>
          <Link to={`/films/${id}`}><input type="button" value="Quero esse!" /></Link>
        </div>
    </section>
  );
};
export default Plans;
