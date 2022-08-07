import React from 'react'
import { Link } from 'react-router-dom'
import s from './Card.module.css'

const CardFilme = ({id,nomeDoFilme, anoLancamento, urlCartaz, notas, descricaoDoFilme, details}) => {
  return (
    <div className={s.card} key={id}>
      <img className={s.image} src={`https://image.tmdb.org/t/p/original/${urlCartaz}`} alt="" />
      <div className={s.info}>
      <span className={s.name}>{nomeDoFilme} - ({anoLancamento})</span>
      <span>Avaliação: {notas}</span>
      {/* <span>{descricaoDoFilme}</span> */}
      <button className={s.btn} onClick={details}> Detalhes</button>
      </div>
    </div>
  )
}

export default CardFilme