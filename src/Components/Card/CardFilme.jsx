import React from 'react'
import { Link } from 'react-router-dom'
import s from './Card.module.css'

const CardFilme = ({id,nomeDoFilme, anoLancamento, urlCartaz, notas, descricaoDoFilme, details}) => {
  return (
    <div className={s.card} key={id}>
      <img className={s.image} src={`https://image.tmdb.org/t/p/original/${urlCartaz}`} alt="" />
      <div className={s.info}>

      <span className={s.name}>{nomeDoFilme} - ({anoLancamento})</span>

      <span className='notes'> <img className='star' src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/170aa028-50c9-e00b-fab0-7fc833366372.png"/> {notas}</span>
      {/* <span>{descricaoDoFilme}</span> */}
      <button className={s.btn} onClick={details}>
      <span>Detalhes</span>
        </button>
      </div>
    </div>
  )
}

export default CardFilme